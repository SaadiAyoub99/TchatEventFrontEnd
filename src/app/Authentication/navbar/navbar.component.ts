import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from '../service/user-auth.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private userAuthService: UserAuthService, 
    private router: Router,
    public userService: UserService) { }

  ngOnInit(): void {
  }

  public isLoggedIn(){
    return this.userAuthService.isLoggenIn();
  }

  public logout(){
    this.userAuthService.clear();
    this.router.navigate(['/home'])
  }
}
