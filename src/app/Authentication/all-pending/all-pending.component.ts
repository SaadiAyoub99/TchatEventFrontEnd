import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { map } from 'rxjs/operators';
import { EventDetailComponent } from '../event-detail/event-detail.component';
import { Event } from '../models/event';
import { NotifierAcceptDemandeByAdminComponent } from '../notifications/notifier-accept-demande-by-admin/notifier-accept-demande-by-admin.component';
import { NotifierRefuseDemandeByAdminComponent } from '../notifications/notifier-refuse-demande-by-admin/notifier-refuse-demande-by-admin.component';
import { EventsService } from '../service/events.service';
import { ImageProcessingService } from '../service/image-processing.service';
import { ShowDescriptionComponent } from '../show-description/show-description.component';
import { ShowImageComponent } from '../show-image/show-image.component';

@Component({
  selector: 'app-all-pending',
  templateUrl: './all-pending.component.html',
  styleUrls: ['./all-pending.component.css']
})
export class AllPendingComponent implements OnInit {

  id: any;
  eventPending: Event[] = [];
  displayedColumns: string[] = ['user','titre','prixPlace', 'heureDebut et dateOrganisation', 'salle', 'categorie','Image','description', 'Accepter', 'Refuser'];

  constructor(private eventService: EventsService, 
    public imagesDialog: MatDialog,
    public descriptionDialog: MatDialog,
    private imageProcessingService: ImageProcessingService,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getAllPendingDemandes();
  }

  public getAllPendingDemandes(){
    this.eventService.getListPendingDemande()
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


  public acceptedDemande(id: number){
    this.eventService.acceptedDemande(id).subscribe(
      (resp) => {
        console.log(resp);
        this.getAllPendingDemandes();
      },
      (error:HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

  public refuseDemande(id: number){
    this.eventService.refuseDemande(id).subscribe(
      (resp) => {
        console.log(resp);
        this.getAllPendingDemandes();
      },
      (error:HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

  public openSnackBar(): void{
    this.snackBar.openFromComponent(NotifierAcceptDemandeByAdminComponent, {
      duration: 3000,
      panelClass: ['blue-snackbar']
    });
  }

  public openSnackBar2(): void{
    this.snackBar.openFromComponent(NotifierRefuseDemandeByAdminComponent, {
      duration: 3000,
      panelClass: ['blue-snackbar']
    });
  }


}
