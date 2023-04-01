import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerInterface} from "@app/data/interfaces/customer-interface";
import {CustomerService} from "@app/data/services/customer/customer.service";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customerForm: FormGroup = new FormGroup({});
  customer: CustomerInterface | any;

  constructor(
    private formBuilder: FormBuilder,
    private customerService: CustomerService,
  ) {
  }

  ngOnInit(): void {
    this.customerForm = this.formBuilder.group({
      clientNit: new FormControl(null, [Validators.required]),
      clientName: new FormControl(null, [Validators.required]),
      clientId: new FormControl()
    });
    this.customerService.getAllCustomer().subscribe(resp => {
      this.customer = resp;
    })

  }

  saveCustomer(): void {
    if (this.customerForm.valid) {
      const data = {
        clientNit: this.customerForm.get('clientNit')?.value,
        clientName: this.customerForm.get('clientName')?.value
      }
      this.customerService.saveCustomer(data).subscribe(
        (resp) => {
          this.customerForm.reset()
        }
      )
    }

  }
}
