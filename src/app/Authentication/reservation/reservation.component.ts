import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Event } from '../models/event';
import { Place } from '../models/place';
import { Salle } from '../models/salle';
import { EventsService } from '../service/events.service';
import { UserAuthService } from '../service/user-auth.service'

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  idSalle!: number;
  id!: any;
  eventPending: Event[] = [];
  event: Event = new Event();



  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private eventService: EventsService, private userAuthService: UserAuthService) { }


  ngOnInit(): void {
  }

  test(){
    alert("Test")
  }


    // public getDemandeDetailsById(event: Event) {
    //   this.eventService.getDemandeDetailsById(this.id).subscribe(
    //     (resp) => {
    //       console.log(resp);
    //       this.event = resp
    //     },
    //     (err) => {
    //       console.log(err);
    //     }
    //   )
    // }


    
  //  getPlaceOfSalle(event: Event) {
  //   this.eventService.getPlaceOfSalle(this.event.salle.id).subscribe(
  //     (resp) => {
  //       this.event.salle.places = resp
  //       console.log(resp);
  //     },
  //     (err) => {
  //       console.log(err);
  //     }
  //   )
  // }

    public onReserved(){
      console.log("vdgykjytersgnjjhgf")
      // this.eventService.reservedPlace(id, this.userAuthService.getIdUser()).subscribe(
      //   (resp) => {
      //   },
      //   (err) => {
      //     console.log(err);
      //   }
      // )
    }

}
