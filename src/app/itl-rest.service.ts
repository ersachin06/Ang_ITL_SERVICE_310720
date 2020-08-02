import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItlRestService {

  private readonly apiurl="https://reqres.in/api";

  constructor(private httpClient:HttpClient) { }

  getUserById(uid:number) : Observable<Object>
  {
    //response we are getting is : 
    //{"data":{"id":1,"email":"george.bluth@reqres.in","first_name":"George","last_name":"Bluth","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg"},"ad":{"company":"StatusCode Weekly","url":"http://statuscode.org/","text":"A weekly newsletter focusing on software development, infrastructure, the server, performance, and the stack end of things."}}
      let data=this.httpClient.get(`${this.apiurl}/users/${uid}`);    
      console.log(data);
      console.log(JSON.stringify(data));
    return data;
  }
  getLstOfusers()
  {
    return this.httpClient.get(`${this.apiurl}/users`)  ;
  }
}
