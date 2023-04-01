import {Component, OnInit} from '@angular/core';
import {AreaService} from "@app/data/services/area/area.service";
import {TeamsService} from "@app/modules/teams/shared/teams.service";
import {User_storyService} from "@app/data/services/user_story/user_story.service";
import {TeamTasksService} from "@app/data/services/team-tasks/team-tasks.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ImprovementsService} from "@app/data/services/improvements/improvements.service";

@Component({
  selector: 'app-manage-improvements',
  templateUrl: './manage-improvements.component.html',
  styleUrls: ['./manage-improvements.component.css']
})
export class ManageImprovementsComponent implements OnInit {
  improvementsForm: FormGroup = new FormGroup({});
  areas: any;
  teams: any;
  userStore: any;
  tasks: any;

  constructor(
    private areaService: AreaService,
    private teamService: TeamsService,
    private userStoryService: User_storyService,
    private teamTasksService: TeamTasksService,
    private formBuilder: FormBuilder,
    private improvementsService:ImprovementsService
  ) {
  }

  ngOnInit(): void {
    this.improvementsForm = this.formBuilder.group({
      areaId: new FormControl(null, [Validators.required]),
      teamId: new FormControl(null, [Validators.required]),
      userStoryId: new FormControl(null, [Validators.required]),
      taskId: new FormControl(null, [Validators.required]),
      typeImprovement: new FormControl(null, [Validators.required]),
      observation: new FormControl(null, [Validators.required])
    });

    this.getAllAreas();
    this.getAllTeams();
    this.getAllUserStory();
    this.getAllTasks();

  }

  getAllAreas() {
    this.areaService.getAllArea().subscribe(resp => {
      this.areas = resp;
    });
  }

  getAllTeams() {
    this.teamService.getAllTeams().subscribe(resp => {
      this.teams = resp;
    });
  }

  getAllUserStory() {
    this.userStoryService.getAllUser_story().subscribe(resp => {
      this.userStore = resp;
    })
  }

  getAllTasks() {
    this.teamTasksService.getAllTeamTasks().subscribe(resp => {
      this.tasks = resp;
    })
  }

  saveImprovements(): void {
    if(this.improvementsForm.valid) {
      const improvements = {
        areaId: this.improvementsForm.get('areaId')?.value,
        teamId: this.improvementsForm.get('teamId')?.value,
        userStoryId: this.improvementsForm.get('userStoryId')?.value,
        taskId: this.improvementsForm.get('taskId')?.value,
        typeImprovement: this.improvementsForm.get('typeImprovement')?.value,
        observation: this.improvementsForm.get('observation')?.value
      }
      this.improvementsService.saveImprovements(improvements).subscribe((resp=>{
      }))

    }
  }
}
