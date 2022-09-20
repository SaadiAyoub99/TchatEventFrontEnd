import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Categorie } from '../models/categorie';
import { Centre } from '../models/centre';
import { Event } from '../models/event';
import { FileHandle } from '../models/file-handle';
import { Salle } from '../models/salle';
import { EventsService } from '../service/events.service';

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

  constructor(private eventService: EventsService, private sanitizer: DomSanitizer) { }

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

    const dEventFormData = this.prepareFormData(this.dEvent);

    this.eventService.createDemande(dEventFormData, this.id).subscribe(
      (response: Event) => {
        console.log(response);
        demandeEventForm.reset();
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

  prepareFormData(dEvent: Event): FormData{
    const formData = new FormData();
    formData.append(
      'demandeEvent',
      new Blob([JSON.stringify(dEvent)], {type: 'application/json'})
    );

      for ( var i=0; i < dEvent.image.length; i++){
        formData.append(
          'imageFile',
          dEvent.image[i].file,
          dEvent.image[i].file.name
        );
      }
      return formData;

  }

  onFileSelected(event: any) {
    if (event.target.files) {
      const file = event.target.files[0];

      const fileHandle: FileHandle = {
        file: file,
        url: this.sanitizer.bypassSecurityTrustUrl(
          window.URL.createObjectURL(file)
        )
      }

      this.dEvent.image.push(fileHandle);
    }
  }


  removeImages(i: number){
    this.dEvent.image.splice(i, 1);
  }

}
