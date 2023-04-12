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
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import { AllPendingComponent } from './Authentication/all-pending/all-pending.component';
import { ShowImageComponent } from './Authentication/show-image/show-image.component';
import { ShowDescriptionComponent } from './Authentication/show-description/show-description.component';
import { UserPendingDemandeComponent } from './Authentication/user-pending-demande/user-pending-demande.component';
import { UserAcceptedDemandeComponent } from './Authentication/user-accepted-demande/user-accepted-demande.component';
import { UserRefusedDemandeComponent } from './Authentication/user-refused-demande/user-refused-demande.component';
import { EventsMarketplaceComponent } from './Authentication/events-marketplace/events-marketplace.component';
import { AllAcceptedComponent } from './Authentication/all-accepted/all-accepted.component';
import { ReservationComponent } from './Authentication/reservation/reservation.component';
import { CartReservationComponent } from './Authentication/cart-reservation/cart-reservation.component';
import { NotifierDeleteEventByAdminComponent } from './Authentication/notifications/notifier-delete-event-by-admin/notifier-delete-event-by-admin.component';
import { NotifierAcceptDemandeByAdminComponent } from './Authentication/notifications/notifier-accept-demande-by-admin/notifier-accept-demande-by-admin.component';
import { NotifierRefuseDemandeByAdminComponent } from './Authentication/notifications/notifier-refuse-demande-by-admin/notifier-refuse-demande-by-admin.component';
import { ConsulteReservationComponent } from './Authentication/consulte-reservation/consulte-reservation.component';
import { ShowRealDescriptionComponent } from './show-real-description/show-real-description.component';
import { EventDetailComponent } from './Authentication/event-detail/event-detail.component';
import { SnackbarNotezBienComponent } from './Authentication/snackbar-notez-bien/snackbar-notez-bien.component';
import { SnackbarDeamndeEnvoyerComponent } from './Authentication/snackbar-deamnde-envoyer/snackbar-deamnde-envoyer.component';
import { SnackbarDemandeAnnulerComponent } from './Authentication/snackbar-demande-annuler/snackbar-demande-annuler.component';
import { SnackbarSupprimerEventComponent } from './Authentication/snackbar-supprimer-event/snackbar-supprimer-event.component';
import { SnackbarCancelReservationComponent } from './Authentication/snackbar-cancel-reservation/snackbar-cancel-reservation.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    UserComponent,
    LoginComponent,
    NavbarComponent,
    ForbiddenComponent,
    HomeComponent,
    AddDemandeEventComponent,
    AllPendingComponent,
    ShowImageComponent,
    ShowDescriptionComponent,
    UserPendingDemandeComponent,
    UserAcceptedDemandeComponent,
    UserRefusedDemandeComponent,
    EventsMarketplaceComponent,
    AllAcceptedComponent,
    ReservationComponent,
    CartReservationComponent,
    NotifierDeleteEventByAdminComponent,
    NotifierAcceptDemandeByAdminComponent,
    NotifierRefuseDemandeByAdminComponent,
    ConsulteReservationComponent,
    ShowRealDescriptionComponent,
    EventDetailComponent,
    SnackbarNotezBienComponent,
    SnackbarDeamndeEnvoyerComponent,
    SnackbarDemandeAnnulerComponent,
    SnackbarSupprimerEventComponent,
    SnackbarCancelReservationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatCardModule,
    MatDividerModule,
    MatGridListModule,
    MatTableModule,
    MatDialogModule
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
