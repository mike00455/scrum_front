import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Team} from "@app/modules/teams/shared/team";
import {TeamEmployee} from "@app/modules/teams/shared/team-employees";

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  private API_SERVER = 'http://localhost:8020/teams';

  constructor(
    private httpClient: HttpClient
  ) {
  }

  public getAllTeams(): Observable<any> {
    return this.httpClient.get(this.API_SERVER + "/all");
  }

  public saveTeam(manage_teams: any): Observable<any> {
    return this.httpClient.post(this.API_SERVER + "/save", manage_teams);
  }

  getTeamById(id: string | null): Observable<any> {
    return this.httpClient.get(this.API_SERVER + "/teamid/" + id);
  }

  updateTeam(id: string, team: Team) {
    return this.httpClient.put(this.API_SERVER + "/" + id, team);
  }

  addEmployeeTeam(teamEmployee: any): Observable<any> {
    return this.httpClient.post(this.API_SERVER + "/teamemployee", teamEmployee);
  }

}




