import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { ProyectService } from "@app/data/services/proyect/proyect.service";
import { Router } from "@angular/router";

export interface Client {
  clientId:string;
  clientNit:  string;
  clientName: string
}

export interface Area {
  areaId:string;
  areaName:  string;
  employees: string;
  teams: string;
}


@Component({
  selector: 'app-proyect-add',
  templateUrl: './proyect-add.component.html',
  styleUrls: ['./proyect-add.component.css']
})
export class ProyectAddComponent implements OnInit {

  proyectAddForm: FormGroup = new FormGroup({});
  public clients : Client[] = [];
  public areas : Area[] = [];

  constructor(
    public formBuilder: FormBuilder,
    public proyectService: ProyectService,
    private route: Router
  ) {
  }

  ngOnInit(): void {

    this.proyectAddForm = this.formBuilder.group({
      proyectName: new FormControl(null, [Validators.required]),
      proyectClient: new FormControl(null, [Validators.required]),
      proyectArea: new FormControl(null, [Validators.required]),
    });

    this.proyectService.getClient().subscribe((data) => {
      this.clients = data;
    }, );

    this.proyectService.getArea().subscribe((data) => {
      this.areas = data;
    },
     );
  }

  saveProyect(): void {
    if (this.proyectAddForm.valid) {
      const data = {
        projectName: this.proyectAddForm.get('proyectName')?.value,
        clientId: this.proyectAddForm.get('proyectClient')?.value,
        areaId: this.proyectAddForm.get('proyectArea')?.value,
      }
      this.proyectService.saveProyect(data).subscribe((resp) => {
        this.proyectAddForm.reset()
        this.route.navigateByUrl('app/proyect').then();
      }, );
    }
  }
}
