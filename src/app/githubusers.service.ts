import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubusersService {

  constructor(private http: HttpClient) { }

  api_url = "https://api.github.com";

  sendusers(){
    return this.http.get<any>(`${this.api_url}/users`);
  }


  senduserrepo(username: string){
return this.http.get<any>(`${this.api_url}/users/${username}/repos`);
  }
  sendusername(uname: string){
return this.http.get<any>(`${this.api_url}/users/${uname}`);
  }
}
