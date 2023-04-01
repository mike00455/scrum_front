import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ManageImprovementsService {

  constructor(
    private httpClient:HttpClient

  ) { }

  getClient():Observable<any>{
    return this.httpClient.get('http://localhost:8020/clients/all');
  }

  getArea(): Observable<any>{
    return this.httpClient.get('http://localhost:8020/areas/all');
  }
}

