import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ImprovementsService {
  private API_SERVER = '';

  constructor(
    private httpClient: HttpClient
  ) {
  }

  public getAllImprovements(): Observable<any> {
    return this.httpClient.get(this.API_SERVER + "/");
  }

  public saveImprovements(improvements: any): Observable<any> {
    return this.httpClient.post(this.API_SERVER + "/", improvements)
  }
}





