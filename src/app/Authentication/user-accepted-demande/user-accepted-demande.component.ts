import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { map } from 'rxjs';
import { Event } from '../models/event';
import { EventsService } from '../service/events.service';
import { ImageProcessingService } from '../service/image-processing.service';
import { UserAuthService } from '../service/user-auth.service';
import { ShowDescriptionComponent } from '../show-description/show-description.component';
import { ShowImageComponent } from '../show-image/show-image.component';

@Component({
  selector: 'app-user-accepted-demande',
  templateUrl: './user-accepted-demande.component.html',
  styleUrls: ['./user-accepted-demande.component.css']
})
export class UserAcceptedDemandeComponent implements OnInit {

  id!: number;
  dEvent: Event[] = [];
  displayedColumns: string[] = ['titre', 'salle','prixPlace', 'heureDebut et dateOrganisation', 'categorie','description','Image', 'status'];

  constructor(private eventService: EventsService, 
    private userAuthService: UserAuthService,
    public imagesDialog: MatDialog,
    public descriptionDialog: MatDialog,
    private imageProcessingService: ImageProcessingService) { }

  ngOnInit(): void {
    this.getIdUser();
    this.getAcceptedDemandeByUserId();
  }


  getIdUser(){
    this.id = this.userAuthService.getIdUser();
  }

  

  getAcceptedDemandeByUserId(){
    this.eventService.getAcceptedDemandeByUserId(this.id)
    .pipe(
      map((x: Event[], i) => x.map((event: Event) => this.imageProcessingService.createImages(event)))
    )
    .subscribe(
      (resp) => {
        console.log(resp);
        this.dEvent = resp;
      },
      (err) => {
        console.log(err);
      }
    )
  }


  public showImage(event: Event){
    console.log(event);
    this.imagesDialog.open(ShowImageComponent, {
      data: {
        images: event.eventImage
      },
      height: '600px',
      width: '600px',
    });
  }


  public showDescription(event: Event){
      this.descriptionDialog.open(ShowDescriptionComponent,{
        data: {
          descriptions: event.description
        },
        height: '400px',
        width: '700px',
      });
  }

}
