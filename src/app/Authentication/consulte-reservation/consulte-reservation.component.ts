import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { map } from 'rxjs/operators';
import { Event } from '../models/event';
import { Place } from '../models/place';
import { EventsService } from '../service/events.service';
import { ImageProcessingService } from '../service/image-processing.service';
import { SnackbarCancelReservationComponent } from '../snackbar-cancel-reservation/snackbar-cancel-reservation.component';

@Component({
  selector: 'app-consulte-reservation',
  templateUrl: './consulte-reservation.component.html',
  styleUrls: ['./consulte-reservation.component.css']
})
export class ConsulteReservationComponent implements OnInit {

  id: any;
  placePending: Place[] = [];
  displayedColumns: string[] = ['user','NumeroPlace','salle','titre','heureDebut et dateOrganisation','AnnulerReservation'];

  constructor(private eventService: EventsService, 
    public imagesDialog: MatDialog,
    public descriptionDialog: MatDialog,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getAllReservedPlaces();
  }


  public getAllReservedPlaces(){
    this.eventService.getAllReserverPlaces()
    .subscribe(
      (resp: Place[]) =>{
        console.log(resp);
        this.placePending = resp;
      }, (error:HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

    public cancelReservation(id: number){
    this.eventService.CancelReservedPlace(id).subscribe(
      (resp) => {
        console.log(resp);
        this.getAllReservedPlaces();
      },
      (error:HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

    public openSnackBar(): void{
    this.snackBar.openFromComponent(SnackbarCancelReservationComponent, {
      duration: 3000,
      panelClass: [".custom-style"]
    });
  }

}
