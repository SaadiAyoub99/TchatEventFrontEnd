import { Injectable } from '@angular/core';


const USER_KEY = 'auth-user';

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

  public setIdUser(id:number){
    localStorage.setItem("id", JSON.stringify(id));
  }

  public getIdUser(): number{
    return JSON.parse(localStorage.getItem("id") || '{}');
  }

  public setEvent(id:number){
    localStorage.setItem("id", JSON.stringify(id));
  }

  public getEvent(): number{
    return JSON.parse(localStorage.getItem("id") || '{}')
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
