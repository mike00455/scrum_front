import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { ProyectService } from "@app/data/services/proyect/proyect.service";
import { ActivatedRoute, Router } from "@angular/router";


export interface Client {
  clientId: string;
  clientNit: string;
  clientName: string
}

export interface Area {
  areaId: string;
  areaName: string;
  employees: string;
  teams: string;
}

@Component({
  selector: 'app-proyect-edit',
  templateUrl: './proyect-edit.component.html',
  styleUrls: ['./proyect-edit.component.css']
})
export class ProyectEditComponent implements OnInit {

  proyect: any;
  proyectEditForm: FormGroup = new FormGroup({});
  projectId: any;
  public clients: Client[] = [];
  public areas: Area[] = [];


  constructor(
    public formBuilder: FormBuilder,
    public proyectService: ProyectService,
    private route: ActivatedRoute,
    private routeurl: Router
  ) {
  }

  ngOnInit(): void {
    this.proyectEditForm = this.formBuilder.group({
      proyectName: new FormControl(null, [Validators.required]),
      proyectClient: new FormControl(null, [Validators.required]),
      proyectArea: new FormControl(null, [Validators.required]),
    });

    this.projectId = this.route.snapshot.paramMap.get('proyectId');
    this.getProyectById(this.projectId)

    this.proyectService.getClient().subscribe((data) => {
      this.clients = data;
    }, (error) => {
      console.log(error)
    });

    this.proyectService.getArea().subscribe((data) => {
        this.areas = data;
      },
      error => {
        console.log(error)
      });
  }


  getProyectById(id: string | null) {
    this.proyectService.getProyectById(id).subscribe(resp => {
        this.proyectEditForm.patchValue({
          proyectName: resp.projectName,
          proyectClient: resp.clientId,
          proyectArea: resp.areaId,
        });
      },
      error => {
        console.error(error);
      });
  }


  edit() {
    if (this.proyectEditForm.valid) {
      const data = {
        projectName: this.proyectEditForm.get('proyectName')?.value,
        clientId: this.proyectEditForm.get('proyectClient')?.value,
        areaId: this.proyectEditForm.get('proyectArea')?.value,
      }
      this.proyectService.updateProyect(this.projectId, data).subscribe(
        (resp) => {
          this.proyectEditForm.reset();
          this.routeurl.navigateByUrl('app/proyect').then(r => console.log());
        },
        error => (console.error(error)));
    }
  }

  // upload_image(event: any) {
  //   console.log(event.target.files);
  //   let archive = event.target.files
  //   let reader = new FileReader();
  //
  //   reader.readAsDataURL(archive[0])
  //   reader.onloadend = () => {
  //     this.proyectEditForm.get('proyectArchive')?.setValue(reader.result);
  //     console.log(reader.result);
  //   }
  // }


}
