import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Area} from "@app/data/interfaces/interface-area";
import {AreaService} from "@app/data/services/area/area.service";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit {

  areaForm: FormGroup = new FormGroup({});
  area: Area | any;
  employees = [];
  teams = [];


  constructor(
    public formBuilder: FormBuilder,
    public areaService: AreaService,
  ) {
  }

  ngOnInit(): void {
    this.areaForm = this.formBuilder.group({
      areaId: new FormControl(null,),
      areaName: new FormControl(null, [Validators.required]),
    });
    this.getAllAreas()
  }
  getAllAreas(){
    this.areaService.getAllArea().subscribe(resp => {
        this.area = resp;
      }
    );
  }

  saveArea(): void {

    if (this.areaForm.valid) {
      const data = {
        areaId: this.areaForm.get('areaId')?.value,
        areaName: this.areaForm.get('areaName')?.value,
        employees: this.employees,
        teams: this.teams
      }
      this.areaService.saveArea(data).subscribe(
        () => {
          Swal.fire(
            'Area Creada!',
            'Presione el Boton (OK) para Continuar',
            'success'
          )
          this.areaForm.reset();
          this.getAllAreas();
        },
      );
    }
  };
}
