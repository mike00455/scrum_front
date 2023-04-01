import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient
  ) {
  }

  public get<T>(serviceUrl: string): Observable<T> {
    return this.http.get<T>(serviceUrl);
  }

  public post<T, R>(serviceUrl: string, body: T): Observable<R> {
    return this.http.post<R>(serviceUrl, body);
  }

  public put<T, R>(serviceUrl: string, body: T, options: object): Observable<R> {
    return this.http.put<R>(serviceUrl, body);
  }

  public delete<R>(serviceUrl: string): Observable<R> {
    return this.http.delete<R>(serviceUrl);
  }
}
