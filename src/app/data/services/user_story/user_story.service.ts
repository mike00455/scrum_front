import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class User_storyService {
 private API_SERVER='http://localhost:8020/user_story';
  constructor(
    private httpClient:HttpClient
  ) { }

  public getAllUser_story():Observable<any>{
    return this.httpClient.get(this.API_SERVER+"/");
  }
  public saveUser_story(user_story:any):Observable<any>{
    console.log(user_story)
    return this.httpClient.post(this.API_SERVER+"/",user_story);
  }
  getUserStoryById(id:string | null):Observable<any>{
    return this.httpClient.get(this.API_SERVER+"/"+id);
  }
  updateUserStory(id:string,dataUserStory:any){
    return this.httpClient.put(this.API_SERVER+"/"+id,dataUserStory);
  }
}
