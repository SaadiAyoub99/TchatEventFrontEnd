import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAuthService } from '../service/user-auth.service';
import { UserService } from '../service/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService, private userAuthService: UserAuthService, private router: Router) { }

  ngOnInit(): void {
  }

  login(loginForm: NgForm) {
    this.userService.login(loginForm.value).subscribe(
      (response: any) => {
        this.userAuthService.setToken(response.jwtToken);
        this.userAuthService.setRoles(response.iuser.role);
        console.log(response);
        const role = response.iuser.role.roleName;
        console.log(role);
        if(role === 'User'){
          this.router.navigate(['/addEvent'])
        } else {
          this.router.navigate(['/admin'])
        }
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
