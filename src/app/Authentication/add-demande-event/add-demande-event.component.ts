import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DomSanitizer } from '@angular/platform-browser';
import { Categorie } from '../models/categorie';
import { Centre } from '../models/centre';
import { Event } from '../models/event';
import { FileHandle } from '../models/FileHandle';
import { Salle } from '../models/salle';
import { EventsService } from '../service/events.service';
import { UserAuthService } from '../service/user-auth.service';
import { SnackbarDeamndeEnvoyerComponent } from '../snackbar-deamnde-envoyer/snackbar-deamnde-envoyer.component';

@Component({
  selector: 'app-add-demande-event',
  templateUrl: './add-demande-event.component.html',
  styleUrls: ['./add-demande-event.component.css']
})
export class AddDemandeEventComponent implements OnInit {

  id!: number;
  idSalle!: number;
  idCategorie!: number;
  dEvent: Event = new Event();
  categorie: Categorie[] = [];
  salle: Salle[] = [];

  constructor(private eventService: EventsService, private userAuthService: UserAuthService, private sanitizer: DomSanitizer, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getCategorie();
    this.getSalle();
    this.getIdUser();
    }

  getCategorie() {
    this.eventService.getCategorie().subscribe(
      (resp) => {
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
        this.salle = resp;
      },
      (err) => {
        console.log(err);
      }
    )
  }

  getIdUser(){
    this.id = this.userAuthService.getIdUser();
  }

  demandeEvent(demandeEventForm: NgForm) {

    const eventFormData = this.prepareFormData(this.dEvent);

   this.eventService.createDemande(eventFormData, this.id, this.idSalle, this.idCategorie).subscribe(
      (resp : Event)=>{
        console.log(resp);
        demandeEventForm.reset();
        this.dEvent.eventImage = [];
      },

      (error:HttpErrorResponse)=>{
        console.log(error);
      }
    );
    
  }

  prepareFormData(dEvent: Event): FormData{
    const formData = new FormData();

    formData.append(
      'demandeEvent',
      new Blob([JSON.stringify(dEvent)],{type: 'application/json'})
    );

    for(var i=0; i<dEvent.eventImage.length; i++) {
      formData.append(
        'imageFile',
         dEvent.eventImage[i].file,
         dEvent.eventImage[i].file.name
      );
    }
    return formData;

  }

  onFileSelected(event: any){
    if(event.target.files) {
      const file = event.target.files[0];

      const fileHandle: FileHandle = {
        file: file,
        url: this.sanitizer.bypassSecurityTrustUrl(
          window.URL.createObjectURL(file)
        )
      }

      this.dEvent.eventImage.push(fileHandle);
    }
  }

  removeImages(i: number) {
    this.dEvent.eventImage.splice(i, 1);
  }

    public openSnackBar(): void{
    this.snackBar.openFromComponent(SnackbarDeamndeEnvoyerComponent, {
      duration: 3000,
      panelClass: [".custom-style"]
    });
  }




}
