import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {SprintsService} from "@app/data/services/sprints/sprints.service";
import {AreaService} from "@app/data/services/area/area.service";
import {TeamsService} from "@app/modules/teams/shared/teams.service";
import {Team} from "@app/modules/teams/shared/team";
import {Area} from "@app/data/interfaces/interface-area";
import Swal from "sweetalert2";
import {HttpErrorResponse} from "@angular/common/http";
import {Router} from "@angular/router";


@Component({
  selector: 'app-manage-sprints',
  templateUrl: './manage-sprints.component.html',
  styleUrls: ['./manage-sprints.component.css']
})
export class ManageSprintsComponent implements OnInit {
  sprintsForm: FormGroup = new FormGroup({});
  teams: Team[] = [];
  areas: Area[] = [];
  areaId: string = '';
  sprints: any;
  elapsedDays: any
  sprintStart: any;
  sprintEnd: any;
  currenDate = new Date();


  constructor(
    private formBuilder: FormBuilder,
    public sprintService: SprintsService,
    public areaService: AreaService,
    public teamService: TeamsService,
    private route: Router
  ) {
  }


  ngOnInit(): void {
    this.sprintsForm = this.formBuilder.group({
      sprintsArea: new FormControl(null, [Validators.required]),
      teamId: new FormControl(null, [Validators.required]),
      sprintStart: new FormControl(null, [Validators.required]),
      sprintEnd: new FormControl(null, [Validators.required])
    });

    this.teamService.getAllTeams().subscribe((data) => {
        this.teams = data;
      },
    );

    this.areaService.getAllArea().subscribe((data) => {
        this.areas = data;
      },
    );
    this.getAllSprints();
  }

  getAllSprints() {
    this.sprintService.getAllASprint().subscribe((data) => {
      this.sprints = data;
    })
  }

  selectArea() {
    this.areaId = this.sprintsForm.get('sprintsArea')?.value;
    this.sprintService.getTeamArea(this.areaId).subscribe((data) => {
        this.teams = data;
      },
    );
  }


  saveSprint(): void {
    if (this.sprintsForm.valid) {
      this.sprintStart = this.sprintsForm.get('sprintStart')?.value;
      this.sprintEnd = this.sprintsForm.get('sprintEnd')?.value;

      let initialDate = new Date(this.sprintStart);
      let endDate = new Date(this.sprintEnd);
      initialDate.setDate(initialDate.getDate() + 1);
      endDate.setDate(endDate.getDate() + 1);

      if (initialDate.getTime() < this.currenDate.getTime()) {
        Swal.fire({
          icon: 'error',
          title: 'Rango de Fechas Invalido',
          text: 'El Sprint no puede comenzar en una fecha Anterior a la Actual'
        })
      } else {
        if (initialDate.getTime() >= endDate.getTime()) {
          Swal.fire({
            icon: 'error',
            title: 'Rango de Fechas Invalido',
            text: 'La Fecha Inicial es mayor o Igual a la Fecha Final'
          })

        } else {
          let milisecondsDay = 24 * 60 * 60 * 1000;
          let elapsedMilliseconds = Math.abs(endDate.getTime() - initialDate.getTime());
          this.elapsedDays = Math.round(elapsedMilliseconds / milisecondsDay) + 1;

          const data = {
            teamId: this.sprintsForm.get('teamId')?.value,
            sprintStart: this.sprintStart,
            sprintEnd: this.sprintEnd,
            sprintDay: this.elapsedDays
          }

          this.sprintService.saveSprint(data).subscribe({
            next: () => {
              Swal.fire(
                'Sprint Creado Correctamente!',
                'Presione el Boton (OK) para Continuar',
                'success'
              )
              this.sprintsForm.reset();
              this.getAllSprints();
            },
            error: (error: HttpErrorResponse) => {
              if (error.status == 400) {
                Swal.fire({
                  icon: 'error',
                  title: 'Rango de Fechas Invalido',
                  text: 'Ya existe un Sprint Dentro de Este Rango de Fechas'
                });
              }else{
                Swal.fire({
                  icon: 'error',
                  title: 'OOPS',
                  text: 'Error server'
                })
              }

            }
          });

        }

      }
    } else {
      Swal.fire({
        icon: 'warning',
        title: 'Formulario Invalido',
        text: 'Por favor verifique que todos los campos se llenen correctamente'
      })
      this.sprintsForm.markAllAsTouched();
    }
  }

  sendToChosenButton(sprint, route: string) {
    let dateSprintEnd = new Date(sprint.sprintEnd)
    dateSprintEnd.setDate(dateSprintEnd.getDate() + 1);
    if (dateSprintEnd >= this.currenDate) {
      switch (route) {
        case 'calculate_points_sprint': {
          this.route.navigateByUrl('/app/sprints/calculateSprintPoints/' + sprint.sprintId + '/' + sprint.teamId).then();
          break;
        }
        default: {
          break;
        }
        case 'add-userStory-sprint': {
          this.route.navigateByUrl('/app/sprints/add-userStory-sprint/'+sprint.team.areaId+'/'+sprint.sprintId).then();
          break;
        }
        case 'score-sprint-days':{
          this.route.navigateByUrl('/app/sprints/score-sprint-days/'+sprint.sprintId)
        }
      }

    } else {
      Swal.fire({
        icon: 'error',
        title: '¡No es Posible Realizar esta acción!',
        text: 'El Sprint ya Culminó'
      })
    }
  }
}

