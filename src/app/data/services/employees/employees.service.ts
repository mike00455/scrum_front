import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  private API_SERVER = 'http://localhost:8020/employee';

  constructor(private httpClient: HttpClient) {
  }

  public getAllEmployee(): Observable<any> {
    return this.httpClient.get(this.API_SERVER + "/all");
  }

  public saveEmployee(employee: any): Observable<any> {
    return this.httpClient.post(this.API_SERVER + "/save", employee);
  }

  getEmployeeById(id: string | null): Observable<any> {
    return this.httpClient.get(this.API_SERVER + "/" + id);
  }

  updateEmployee(id: string, employee: any) {
    return this.httpClient.put(this.API_SERVER + "/" + id, employee)
  }

  getEmployeesAddToTeam(teamId: string| null): Observable<any> {
    return this.httpClient.get(this.API_SERVER + "/employeeonteam/" + teamId)
  }

  getEmployeesNonExistent(id: string| null): Observable<any> {
    return this.httpClient.get(this.API_SERVER + "/employeenoexistonteam/" + id)
  }

}
