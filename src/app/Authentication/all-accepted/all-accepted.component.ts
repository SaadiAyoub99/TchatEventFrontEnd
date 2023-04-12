import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { map } from 'rxjs';
import { EventDetailComponent } from '../event-detail/event-detail.component';
import { Event } from '../models/event';
import { NotifierDeleteEventByAdminComponent } from '../notifications/notifier-delete-event-by-admin/notifier-delete-event-by-admin.component';
import { EventsService } from '../service/events.service';
import { ImageProcessingService } from '../service/image-processing.service';
import { NotifierService } from '../service/notifier.service';
import { UserAuthService } from '../service/user-auth.service';
import { ShowDescriptionComponent } from '../show-description/show-description.component';
import { ShowImageComponent } from '../show-image/show-image.component';

@Component({
  selector: 'app-all-accepted',
  templateUrl: './all-accepted.component.html',
  styleUrls: ['./all-accepted.component.css']
})
export class AllAcceptedComponent implements OnInit {

  id: any;
  eventPending: Event[] = [];
  displayedColumns: string[] = ['user','titre','prixPlace', 'heureDebut et dateOrganisation', 'salle', 'categorie','description','Image', 'Supprimer'];


  constructor(private eventService: EventsService, 
    public imagesDialog: MatDialog,
    public descriptionDialog: MatDialog,
    private imageProcessingService: ImageProcessingService,
    private userAuthService: UserAuthService,
    private snackBar: MatSnackBar
    ) { }

  ngOnInit(): void {
    this.getAllAcceptedDemandes();
    this.getIdUser();
  }

  getIdUser(){
    this.id = this.userAuthService.getIdUser();
  }

  public getAllAcceptedDemandes(){
    this.eventService.getAllAcceptedDemandes()
    .pipe(
      map((x: Event[], i) => x.map((event: Event) => this.imageProcessingService.createImages(event)))
    )
    .subscribe(
      (resp: Event[]) => {
        console.log(resp);
        this.eventPending = resp;
      }, (error:HttpErrorResponse) => {
        console.log(error);
      }
      
    );
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
      this.descriptionDialog.open(EventDetailComponent,{
        data: {
          descriptions: event.description
        },
        height: '400px',
        width: '700px',
      });
  }


  public deleteDemande(id: number){
    this.eventService.deleteDemande(id).subscribe(
      (resp) => {
        console.log(resp);
        this.getAllAcceptedDemandes();
      },
      (error:HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

  public openSnackBar(): void{
    this.snackBar.openFromComponent(NotifierDeleteEventByAdminComponent, {
      duration: 3000,
      panelClass: [".custom-style"]
    });
  }

}
