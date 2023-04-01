import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {TeamsService} from "@app/modules/teams/shared/teams.service";
import {Tasks} from "@app/data/interfaces/tasks";
import {TeamTasksService} from "@app/data/services/team-tasks/team-tasks.service";
import {Team} from "@app/modules/teams/shared/team";

@Component({
  selector: 'app-team-tasks',
  templateUrl: './team-tasks.component.html',
  styleUrls: ['./team-tasks.component.css']
})
export class TeamTasksComponent implements OnInit {
  tasksForm: FormGroup = new FormGroup({})
  teams: any;
  tasks: Tasks | any;
  team:Team []=[]
  filterTaskTeamForm:FormGroup=new FormGroup({})



  constructor(
    private manageTeamsService: TeamsService,
    private formBuilder: FormBuilder,
    private teamTasksService: TeamTasksService
  ) {
  }

  ngOnInit(): void {
    this.tasksForm = this.formBuilder.group({
      taskTeamName: new FormControl(null, [Validators.required]),
      teamId: new FormControl(null, [Validators.required]),
      taskTeamId: new FormControl(null,)
    })
    this.getAllTeamsSelect();
    this.filterTaskTeamForm = this.formBuilder.group({
      teamIdFilter: new FormControl(null, [Validators.required])
    })
  }

  getAllTeamsSelect() {
    this.manageTeamsService.getAllTeams().subscribe(resp => {
      this.teams = resp
    });
  }

  saveTasks(): void {
    const data = {
      teamId:this.tasksForm.get('teamId')?.value,
      taskTeamName:this.tasksForm.get('taskTeamName')?.value,
    }


    this.teamTasksService.saveTeamTasks(data).subscribe((resp)=>{
      this.tasksForm.reset();
    })
  }
  deleteTasks(task){
    this.teamTasksService.deleteTeamTasks(task.taskTeamId).subscribe(resp=>{
    })
  }

  selectTeamFilter() {
    const teamId = this.filterTaskTeamForm.get('teamIdFilter')?.value
    this.teamTasksService.getAllTaskTeamByTeamId(teamId).subscribe(resp=>{
      this.tasks=resp;
    })

  }
}
