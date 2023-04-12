import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Event } from '../models/event';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {
  result: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  
  ngOnInit(): void {
    console.log(this.data); 
  }

  
}
