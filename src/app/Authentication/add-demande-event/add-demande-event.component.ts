import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Categorie } from '../models/categorie';
import { Centre } from '../models/centre';
import { Event } from '../models/event';
import { FileHandle } from '../models/file-handle';
import { Salle } from '../models/salle';
import { EventsService } from '../service/events.service';
import { UserAuthService } from '../service/user-auth.service';

@Component({
  selector: 'app-add-demande-event',
  templateUrl: './add-demande-event.component.html',
  styleUrls: ['./add-demande-event.component.css']
})
export class AddDemandeEventComponent implements OnInit {

  id!: number;
  dEvent: Event = new Event();
  categorie: Categorie[] = [];
  salle: Salle[] = [];

  constructor(private eventService: EventsService) { }

  ngOnInit(): void {

  }

  getCategorie() {
    this.eventService.getCategorie().subscribe(
      (resp) => {
        console.log(resp);
        this.categorie = resp;
      },
      (err) => {
        console.log(err);
      }
    )
  }

  getSalle() {
    this.eventService.getSalle().subscribe(
      (resp) => {
        console.log(resp);
        this.salle = resp;
      },
      (err) => {
        console.log(err);
      }
    )
  }

  demandeEvent(demandeEventForm: NgForm) {
    this.eventService.createDemande(this.dEvent, this.id).subscribe(
      (resp : Event)=>{
        console.log(resp);
      },

      (error:HttpErrorResponse)=>{
        console.log(error);
      }
    );
    
  }




}
