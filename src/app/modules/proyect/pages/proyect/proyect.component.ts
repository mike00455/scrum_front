import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Proyect } from "@app/data/interfaces/proyect";
import { ProyectService } from "@app/data/services/proyect/proyect.service";
import { AreaService } from "@app/data/services/area/area.service";
import { CustomerService } from "@app/data/services/customer/customer.service";

@Component({
  selector: 'app-proyect',
  templateUrl: './proyect.component.html',
  styleUrls: ['./proyect.component.css']
})
export class ProyectComponent implements OnInit {

  proyectFrom: FormGroup = new FormGroup({});
  proyect: Proyect[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private proyectService: ProyectService,
    private customerService: CustomerService,
    private areaService: AreaService
  ) {
  }

  ngOnInit(): void {
    this.proyectService.getAllProyect().subscribe(resp => {
      resp.forEach(item => {
        this.customerService.getCustomerById(item.clientId).forEach(customer => {
          item.clientId = customer.clientName
        })
        this.areaService.getArea(item.areaId).forEach(area => {
          item.areaId = area.areaName
        })
      })
      this.proyect = resp;
    });
  }

  //
  // upload_image(event: any) {
  //   console.log(event.target.files);
  //   let archive = event.target.files
  //   let reader = new FileReader();
  //
  //   reader.readAsDataURL(archive[0])
  //   reader.onloadend = () => {
  //     console.log(reader.result);
  //   }
  //
  // }
}
