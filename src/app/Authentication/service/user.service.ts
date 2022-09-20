import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserAuthService } from './user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  API = "http://localhost:8088"
  requestHeader = new HttpHeaders(
    { "No-Auth": "True" }
  );

  constructor(private httpClient: HttpClient,     
    private userAuthService: UserAuthService
    ) { }

  public login(loginData: any) {
    return this.httpClient.post(this.API + "/authenticate", loginData, { headers: this.requestHeader });
  }

  public forUser(){
    return this.httpClient.get(this.API + '/forUser', { responseType: 'text', });
  }

  public forAdmin(){
    return this.httpClient.get(this.API + '/forAdmin', { responseType: 'text', });
  }

  public roleMatch(allowedRoles: any): boolean {
    let isMatch = false;
    const userRoles: any = this.userAuthService.getRoles();

    /* Verification de role utilisateur */
    if (userRoles != null && userRoles) {
      for (let j = 0; j < allowedRoles.length; j++) {
        if (userRoles.roleName === allowedRoles[j]) {
          isMatch = true;
          return isMatch
        }
      }
    }
    return isMatch;
  }
}
