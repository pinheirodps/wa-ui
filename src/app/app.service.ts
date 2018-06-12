import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs/internal/Observable";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  uploadApiUrl = 'http://localhost:8080/upload';

  constructor(private http: HttpClient) { }

  uploadList(formData:FormData) {
    return this.http.post<Array<any>>(this.uploadApiUrl, formData);
  }

  public getJSON(): Observable<any> {
    return this.http.get("./assets/data.json")
  }

}
