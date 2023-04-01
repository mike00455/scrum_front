import {Component, OnInit} from '@angular/core';
import {EmployeesService} from "@app/data/services/employees/employees.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-employee-edit-form',
  templateUrl: './employee-edit-form.component.html',
  styleUrls: ['./employee-edit-form.component.css']
})
export class EmployeeEditFormComponent implements OnInit {
  employeeEditForm: FormGroup = new FormGroup({})
  employee: any;
  id: any;

  constructor(
    private formBuilder: FormBuilder,
    public employeesService: EmployeesService,
    private route: ActivatedRoute,
    private routeurl: Router
  ) {
  }

  ngOnInit(): void {
    this.employeeEditForm = this.formBuilder.group({
      employeeName: new FormControl(null, [Validators.required]),
      employeeCharge: new FormControl(null, [Validators.required]),
      employeeEmail: new FormControl(null, [Validators.required]),
      employeeKnowledge: new FormControl(null, [Validators.required]),
    });
    this.id = this.route.snapshot.paramMap.get('employeeId');
    this.getEmployeeById(this.id)
  }

  getEmployeeById(id: string | null) {
    this.employeesService.getEmployeeById(id).subscribe(resp => {
      this.employee = resp;
      this.employeeEditForm.patchValue({
        employeeName: this.employee.employeeName,
        employeeCharge: this.employee.employeeCharge,
        employeeEmail: this.employee.employeeEmail,
        employeeKnowledge: this.employee.employeeKnowledge,
      })
    })
  }


  editEmployee() {
    if (this.employeeEditForm.valid) {
      const data = {
        employeeName: this.employeeEditForm.get('employeeName')?.value,
        employeeCharge: this.employeeEditForm.get('employeeCharge')?.value,
        employeeEmail: this.employeeEditForm.get('employeeEmail')?.value,
        employeeKnowledge: this.employeeEditForm.get('employeeKnowledge')?.value,
      }
     this.employeesService.updateEmployee(this.id,data).subscribe(resp=>{
       this.employeeEditForm.reset();
       this.routeurl.navigateByUrl('app/employees').then();
     })


    }

  }
}
