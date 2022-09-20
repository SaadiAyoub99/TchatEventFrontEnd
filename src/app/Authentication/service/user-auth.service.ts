import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor() { }

  public setuserName(userName:string){
    localStorage.setItem("userName", JSON.stringify(userName));
  }

  public getuserName():string{
    return JSON.parse(localStorage.getItem("userName")  || '{}');
  }

  public setRoles(roles:string){
    localStorage.setItem('roles', JSON.stringify(roles));
  }

  public getRoles(): [] {
    return JSON.parse(localStorage.getItem('roles') || '{}');
  }

  public setToken(jwtToken:string){
    localStorage.setItem('jwtToken', jwtToken);
  }

  public getToken(): string | null {
    return localStorage.getItem('jwtToken');
  }

  public clear(){
    localStorage.clear();
  }

  public isLoggenIn(){
    return this.getRoles() && this.getToken() && this.getuserName() ;
  }

}
