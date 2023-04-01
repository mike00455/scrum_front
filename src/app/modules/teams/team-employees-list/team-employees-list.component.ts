import {Component, ViewChild, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {TeamsService} from "@app/modules/teams/shared/teams.service";
import {ActivatedRoute} from "@angular/router";
import {Employee} from "@app/data/interfaces/employee";
import {EmployeesService} from "@app/data/services/employees/employees.service";


@Component({
  selector: 'app-team-employees-list',
  templateUrl: './team-employees-list.component.html',
  styleUrls: ['./team-employees-list.component.css']
})
export class TeamEmployeesListComponent implements OnInit {
  employees: Employee[] = [];
  dataSource: MatTableDataSource<Employee> = new MatTableDataSource();
  displayedColumns: string[] = ['Id', 'Nombre', 'Cargo', 'Conocimiento'];

  @ViewChild(MatPaginator) paginator: MatPaginator | any;
  @ViewChild(MatSort) sort: MatSort | any;

  constructor(private teamsService: TeamsService, private employeeService: EmployeesService, private route: ActivatedRoute) {

  }

  ngOnInit() {

  }


  // getAllEmployeesOfTeam() {
  //   this.teamsService.getTeamById(this.route.snapshot.paramMap.get('teamId')).subscribe(key => {
  //     key.employees.forEach(employeeId => {
  //       this.employeeService.getEmployee(employeeId.empId).subscribe(employee => {
  //         this.employees.push(employee)
  //         this.dataSource.data.push(employee)
  //         this.dataSource.paginator = this.paginator
  //         this.dataSource.sort = this.sort
  //       })
  //     })
  //   })
  // }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

