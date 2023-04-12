import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { EventsMarketplaceComponent } from '../events-marketplace/events-marketplace.component';
import { Event } from '../models/event';
import { EventsService } from '../service/events.service';

@Component({
  selector: 'app-cart-reservation',
  templateUrl: './cart-reservation.component.html',
  styleUrls: ['./cart-reservation.component.css']
})
export class CartReservationComponent implements OnInit {

  events: Event[] = [];

  constructor(private activatedRoute: ActivatedRoute,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public eventService: EventsService) { }

  ngOnInit(): void {
    // this.events = this.activatedRoute.snapshot.data['event'];
    // console.log(this.events);
  }

  public ReserveTicket() {

  }

  // onSelectTicket(p: any) {
  //   p.selected = true;
  //   this.onSelectTicket(p);
  // }

  // getTickets(p: any) {
  //   let str = "btn";
  //   if (p.reserved == true) {
  //     str += "btn-danger"
  //   }
  //   else if (p.selected) {
  //     str += "btn-warning"
  //   }
  //   else {
  //     str += "btn-success"
  //   }
  //   return str;
  // }
}




