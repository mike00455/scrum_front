import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {SprintsService} from "@app/data/services/sprints/sprints.service";
import {AreaService} from "@app/data/services/area/area.service";
import {Area} from "@app/data/interfaces/interface-area";
import {FormBuilder} from "@angular/forms";
import Swal from "sweetalert2";

@Component({
  selector: 'app-add-userStory-sprint',
  templateUrl: './sprints-update.component.html',
  styleUrls: ['./sprints-update.component.css']
})
export class SprintsUpdateComponent implements OnInit {
  public areas: Area[] = [];
  areaId: string | null = '';
  teamId: string | null = '';
  arrayStory: any[] = [];
  pointUserStory: any;
  sprintId: string | null = '';
  arrayDataStory: any[] = [];
  projectName: string | null = '';


  constructor(
    private formBuilder: FormBuilder,
    public sprintService: SprintsService,
    public areaService: AreaService,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.areaId = this.route.snapshot.paramMap.get('areaId');
    this.sprintId = this.route.snapshot.paramMap.get('sprintId');
    this.getAllUserStory();
  }
  filterUserStory(){
    this.pointUserStory = this.arrayStory.filter(r => r.userStoryState.userStoryStateName == 'Refinado' && r.userStoryScore == 0);
  }


  getAllUserStory() {
    this.areaService.getArea(this.areaId).subscribe(resp => {
      resp.projects.forEach(projectsArray => {
        projectsArray.subProjects.forEach(subprojectsArray => {
          subprojectsArray.userStories.forEach(userStorys => {
            this.arrayStory.push(userStorys);
            this.projectName=projectsArray.projectName
          })
        })
        this.filterUserStory();
      })
    })

  }
  scoreStory() {
    this.pointUserStory.forEach(resp => {
      let userStoryScore = resp.userStoryScore
      let userStoryId = resp.userStoryId
      const data = {
        userStoryScore: userStoryScore,
        userStoryId: userStoryId
      }
      this.arrayDataStory.push(data)
    })

    this.sprintService.scoreUserStory(this.sprintId, this.arrayDataStory).subscribe({
      next: () => {
        Swal.fire(
          'Hecho!',
          'Presione el Boton (OK) para Continuar',
          'success'
        )
        this.filterUserStory();
      }
    })

  }
}

