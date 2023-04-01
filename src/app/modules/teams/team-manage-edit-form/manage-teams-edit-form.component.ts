import {Component, OnInit} from '@angular/core';
import {TeamsService} from "@app/modules/teams/shared/teams.service";
import {AreaService} from "@app/data/services/area/area.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {Team} from "@app/modules/teams/shared/team";


@Component({
  selector: 'app-teams-edit-form',
  templateUrl: './manage-teams-edit-form.component.html',
  styleUrls: ['./manage-teams-edit-form.component.css']
})
export class ManageTeamsEditFormComponent implements OnInit {
  teamsForm: FormGroup = new FormGroup({});
  areas: any;
  id: any;
  team: any;
  data : Team | any;

  constructor(
    private formBuilder: FormBuilder,
    public areaService: AreaService,
    public manageTeamService: TeamsService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.teamsForm = this.formBuilder.group({
      areaId: new FormControl(null, [Validators.required]),
      teamName: new FormControl(null, [Validators.required]),
    });
    this.id = this.route.snapshot.paramMap.get('teamId');
    this.getManageTeamById(this.id)
    this.getAllAreaSelect()
  }

  getAllAreaSelect() {
    this.areaService.getAllArea().subscribe(resp => {
      this.areas = resp
    });
  }

  getManageTeamById(id: string | null) {
    this.manageTeamService.getTeamById(id).subscribe(resp => {
      this.team = resp;
      this.teamsForm.patchValue({
        areaId: this.team.areaId,
        teamName: this.team.teamName,
      });


    })
  }

  edit() {
    if (this.teamsForm.valid) {
      this.data = {
        areaId: this.teamsForm.get('areaId')?.value,
        teamName: this.teamsForm.get('teamName')?.value,
      }
      this.manageTeamService.updateTeam(this.id, this.data).subscribe((resp) => {
        this.teamsForm.reset();
      });
    }
  }
}
