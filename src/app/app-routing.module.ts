import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AddDemandeEventComponent } from './Authentication/add-demande-event/add-demande-event.component';
import { AdminComponent } from './Authentication/admin/admin.component';
import { AllAcceptedComponent } from './Authentication/all-accepted/all-accepted.component';
import { AllPendingComponent } from './Authentication/all-pending/all-pending.component';
import { CartReservationComponent } from './Authentication/cart-reservation/cart-reservation.component';
import { ConsulteReservationComponent } from './Authentication/consulte-reservation/consulte-reservation.component';
import { EventsMarketplaceComponent } from './Authentication/events-marketplace/events-marketplace.component';
import { ForbiddenComponent } from './Authentication/forbidden/forbidden.component';
import { HomeComponent } from './Authentication/home/home.component';
import { LoginComponent } from './Authentication/login/login.component';
import { ReservationComponent } from './Authentication/reservation/reservation.component';
import { EventResolverService } from './Authentication/service/event-resolver.service';
import { UserAcceptedDemandeComponent } from './Authentication/user-accepted-demande/user-accepted-demande.component';
import { UserPendingDemandeComponent } from './Authentication/user-pending-demande/user-pending-demande.component';
import { UserRefusedDemandeComponent } from './Authentication/user-refused-demande/user-refused-demande.component';
import { UserComponent } from './Authentication/user/user.component';
import { AuthGuard } from './Authentication/_auth/auth.guard';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component:HomeComponent},
  {path: 'EventsMarketplace', component:EventsMarketplaceComponent},
  {path: 'login', component:LoginComponent},
  {path: 'forbidden', component:ForbiddenComponent},
  {path: 'reservation', component:ReservationComponent},
  {path: 'CartReservation', component:CartReservationComponent,
    resolve: {
      event: EventResolverService
    }
  },
  {path: 'admin', component:AdminComponent, canActivate:[AuthGuard], data:{ roles:['Admin']} },
  {path: 'AllAcceptedDemande', component:AllAcceptedComponent, canActivate:[AuthGuard], data:{ roles:['Admin']} },
  {path: 'AllPendingRequest', component:AllPendingComponent, canActivate:[AuthGuard], data:{ roles:['Admin']} },
  {path: 'AllReserved', component:ConsulteReservationComponent, canActivate:[AuthGuard], data:{ roles:['Admin']} },
  {path: 'user', component:UserComponent, canActivate:[AuthGuard], data:{ roles:['User']} },
  {path: 'addEvent', component:AddDemandeEventComponent, canActivate:[AuthGuard], data:{ roles:['User']} },
  {path: 'MyPendingDemande', component:UserPendingDemandeComponent, canActivate:[AuthGuard], data:{ roles:['User']} },
  {path: 'MyAcceptedDemande', component:UserAcceptedDemandeComponent, canActivate:[AuthGuard], data:{ roles:['User']} },
  {path: 'MyRefusedDemande', component:UserRefusedDemandeComponent, canActivate:[AuthGuard], data:{ roles:['User']} },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
