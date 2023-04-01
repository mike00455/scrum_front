import {Component, OnInit} from '@angular/core';
import {EmployeesService} from "@app/data/services/employees/employees.service";
import {TeamsService} from "@app/modules/teams/shared/teams.service";
import {ActivatedRoute} from "@angular/router";


export interface TeamEmployee {
  employeeId: string,
  teamId: string | null
}

@Component({
  selector: 'app-add-employee',
  templateUrl: './team-add-employee.component.html',
  styleUrls: ['./team-add-employee.component.css']
})
export class TeamAddEmployeeComponent implements OnInit {
  employees: any;

  teamId: string | null = '';
  employeesAddTeam:any;
  constructor(
    private employeesService: EmployeesService,
    private teamService: TeamsService,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    this.teamId = this.route.snapshot.paramMap.get('teamId');
    this.getAllEmployees();
    this.getAllEmployeesAddToTeam(this.teamId);

  }

  getAllEmployees() {
    this.employeesService.getEmployeesNonExistent(this.teamId).subscribe(resp => {
      this.employees = resp;
      this.employees.map(r => {
        r.checked = false;
      })
    })
  }

  AddEmployeeTeam() {
    let employeesAdd = this.employees.filter(resp => resp.checked === true);
    employeesAdd.forEach((element) => {
      let item: TeamEmployee = {
        employeeId: element.employeeId,
        teamId: this.teamId
      }
      let teamEmployee: TeamEmployee[] = [];
      teamEmployee.push(item);
      this.employees = this.employees.filter(resp => resp.checked === false)
      this.teamService.addEmployeeTeam(teamEmployee).subscribe(resp=>{
        this.getAllEmployeesAddToTeam(this.teamId);
      })
    });


  }
  getAllEmployeesAddToTeam(teamId){
    this.employeesService.getEmployeesAddToTeam(teamId).subscribe(resp=>{
      this.employeesAddTeam=resp

    })

  }

}




