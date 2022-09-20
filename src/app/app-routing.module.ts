import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AddDemandeEventComponent } from './Authentication/add-demande-event/add-demande-event.component';
import { AdminComponent } from './Authentication/admin/admin.component';
import { ForbiddenComponent } from './Authentication/forbidden/forbidden.component';
import { HomeComponent } from './Authentication/home/home.component';
import { LoginComponent } from './Authentication/login/login.component';
import { UserComponent } from './Authentication/user/user.component';
import { AuthGuard } from './Authentication/_auth/auth.guard';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component:HomeComponent},
  {path: 'admin', component:AdminComponent, canActivate:[AuthGuard], data:{ roles:['Admin']} },
  {path: 'user', component:UserComponent, canActivate:[AuthGuard], data:{ roles:['User']} },
  {path: 'addEvent', component:AddDemandeEventComponent, canActivate:[AuthGuard], data:{ roles:['User']} },
  {path: 'login', component:LoginComponent},
  {path: 'forbidden', component:ForbiddenComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
