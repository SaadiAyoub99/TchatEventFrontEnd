import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './Authentication/admin/admin.component';
import { UserComponent } from './Authentication/user/user.component';
import { LoginComponent } from './Authentication/login/login.component';
import { NavbarComponent } from './Authentication/navbar/navbar.component';
import { ForbiddenComponent } from './Authentication/forbidden/forbidden.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Authentication/home/home.component';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from './Authentication/_auth/auth.guard';
import { AuthInterceptor } from './Authentication/_auth/auth.interceptor';
import { UserService } from './Authentication/service/user.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddDemandeEventComponent } from './Authentication/add-demande-event/add-demande-event.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { MatHint } from '@angular/material/form-field';
import { MatLabel } from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    UserComponent,
    LoginComponent,
    NavbarComponent,
    ForbiddenComponent,
    HomeComponent,
    AddDemandeEventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatCardModule,
    MatDividerModule,
    MatGridListModule
  ],
  providers: [
    AuthGuard,
    {
      provide : HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi:true
    },
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
