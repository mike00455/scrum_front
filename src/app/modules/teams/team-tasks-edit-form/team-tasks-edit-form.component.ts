import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {TeamTasksService} from "@app/data/services/team-tasks/team-tasks.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-team-tasks-edit-form',
  templateUrl: './team-tasks-edit-form.component.html',
  styleUrls: ['./team-tasks-edit-form.component.css']
})
export class TeamTasksEditFormComponent implements OnInit {
  tasksFormEdit: FormGroup = new FormGroup({})
  id: any;
  taskTeamEdit: any;

  constructor(private formBuilder: FormBuilder, public teamTasksService: TeamTasksService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.tasksFormEdit = new FormGroup({
      taskTeamName: new FormControl(null, [Validators.required])
    });
    this.id = this.route.snapshot.paramMap.get('taskTeamId');
    this.getTaskTeamById(this.id);
  }

  getTaskTeamById(id: string | null) {
    this.teamTasksService.getTeamTasks(id).subscribe(resp => {
      this.taskTeamEdit = resp;
      this.tasksFormEdit.patchValue({
        taskTeamName: this.taskTeamEdit.taskTeamName
      })
    });

  }

  editTasks() {
    if (this.tasksFormEdit.valid) {
      const data = {
        taskTeamName: this.tasksFormEdit.get('taskTeamName')?.value,
      }
      this.teamTasksService.updateTeamTasks(this.id, data).subscribe((resp => {
            this.tasksFormEdit.reset();
          }
        )
      )
    }
  }
}
