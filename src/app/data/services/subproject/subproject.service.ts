import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SubprojectService {

  private API_SERVER='http://localhost:8020/subprojects';

  constructor(private httpClient : HttpClient) { }

  public getAllSubprojects():Observable<any>{
    return this.httpClient.get(this.API_SERVER+"/all");
  }


  public saveSubProject(subProyect:any):Observable<any>{
    return this.httpClient.post(this.API_SERVER+"/save",subProyect);
  }

  getSubProjectById(idSubProyect:string | null):Observable<any>{
    return this.httpClient.get(this.API_SERVER+"/"+idSubProyect);
  }
  updateSubProject(idSubProyect:string,dataSubProyect:any){
    return this.httpClient.put(this.API_SERVER+"/"+idSubProyect,dataSubProyect);
  }
}
