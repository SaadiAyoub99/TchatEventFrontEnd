import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { Event } from '../models/event';
import { EventsService } from '../service/events.service';
import { ImageProcessingService } from '../service/image-processing.service';
import { ShowDescriptionComponent } from '../show-description/show-description.component';
import { ReservationComponent } from '../reservation/reservation.component';
import { UserAuthService } from '../service/user-auth.service';
import { Salle } from '../models/salle';
import { Place } from '../models/place';
import { Router } from '@angular/router';
import { CartReservationComponent } from '../cart-reservation/cart-reservation.component';
import { ShowRealDescriptionComponent } from 'src/app/show-real-description/show-real-description.component';
import { EventDetailComponent } from '../event-detail/event-detail.component';
import { SnackbarNotezBienComponent } from '../snackbar-notez-bien/snackbar-notez-bien.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-events-marketplace',
  templateUrl: './events-marketplace.component.html',
  styleUrls: ['./events-marketplace.component.css']
})
export class EventsMarketplaceComponent implements OnInit {



  constructor(private eventService: EventsService,
    private imageProcessingService: ImageProcessingService,
    private userAuthService: UserAuthService,
    public descriptionDialog: MatDialog,
    public eventDetailDialog: MatDialog,
    public reservationDialog: MatDialog,
    public detailsDialog: MatDialog,
    public dialog:MatDialog,
    public router: Router,) { }

  id!: number;
  idSalle!: number;
  eventPending: Event[] = [];


  ngOnInit(): void {
    this.getAllAcceptedDemandes();
  }

  public getAllAcceptedDemandes() {
    this.eventService.getAllAcceptedDemandes()
      .pipe(
        map((x: Event[], i) => x.map((event: Event) => this.imageProcessingService.createImages(event)))
      )
      .subscribe(
        (resp: Event[]) => {
          console.log(resp);
          this.eventPending = resp;
        }, (error: HttpErrorResponse) => {
          console.log(error);
        }

      );
  }



  public showDescription(event: Event, enteranimation:any, exitanimation:any) {
    this.descriptionDialog.open(ShowDescriptionComponent, {
      data: {
        descriptions: event.salle.places
      },
      enterAnimationDuration:enteranimation,
      exitAnimationDuration:exitanimation,
      height: 'auto',
      width: '700px',
    });
  }

  public eventDescription(event: Event){
    console.log(event);
      this.eventDetailDialog.open(EventDetailComponent,{
        data: {
          descriptionsEvent: event
        },
        height: '400px',
        width: '700px',
      });
  }


  // onGetPlaces(e: any){
  //   this.eventPending.=e;
  //   this.eventService.getAllAcceptedDemandes(e)
  //   .subscribe(
  //     (resp: Event[]) => {
  //       console.log(resp);
  //       this.eventPending = resp;
  //   )
  // }


  // public showReservation(event: Event) {
  //   this.reservationDialog.open(ReservationComponent, {
  //     data: {
  //       listPlace: event.salle.places
  //     },

  //     height: 'auto',
  //     width: '800px',

  //   });
  // }

  onReserved(){
    console.log("vdgykjytersgnjjhgf")
    // this.eventService.reservedPlace(id, this.userAuthService.getIdUser()).subscribe(
    //   (resp) => {
    //   },
    //   (err) => {
    //     console.log(err);
    //   }
    // )
  }

  // OpenDialog(event: Event, enteranimation:any, exitanimation:any){
  //   this.dialog.open(CartReservationComponent,{
  //     data: {
  //       listPlace: event.salle.places,
  //       myFn: () => { console.log },
  //     },
  //     enterAnimationDuration:enteranimation,
  //     exitAnimationDuration:exitanimation,
  //     height: 'auto',
  //     width: '800px',

  //   })
  // }


  // public showReservationCard(idEvent: any) {
  //   this.router.navigate(['/CartReservation', {idEvent: idEvent}])
  // }


  // public showReservationCard(idEvent: any) {
  //   this.router.navigate(['/CartReservation', {idEvent: idEvent}])
  // }




}
