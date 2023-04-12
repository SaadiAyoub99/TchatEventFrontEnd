import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { Event } from '../models/event';
import { EventsService } from '../service/events.service';
import { ImageProcessingService } from '../service/image-processing.service';
import { UserAuthService } from '../service/user-auth.service';
import { ShowDescriptionComponent } from '../show-description/show-description.component';
import { ShowImageComponent } from '../show-image/show-image.component';
import { SnackbarDemandeAnnulerComponent } from '../snackbar-demande-annuler/snackbar-demande-annuler.component';

@Component({
  selector: 'app-user-pending-demande',
  templateUrl: './user-pending-demande.component.html',
  styleUrls: ['./user-pending-demande.component.css']
})
export class UserPendingDemandeComponent implements OnInit {

  id!: number;
  dEvent: Event[] = [];
  displayedColumns: string[] = ['titre', 'salle','prixPlace', 'heureDebut et dateOrganisation', 'categorie','description','Image', 'status','Supprimer'];



  constructor(private eventService: EventsService, 
    private userAuthService: UserAuthService,
    public imagesDialog: MatDialog,
    public descriptionDialog: MatDialog,
    private imageProcessingService: ImageProcessingService,
    private router: Router,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getIdUser();
    this.getPendingDemandeByUserId();
  }

  getIdUser(){
    this.id = this.userAuthService.getIdUser();
  }

  getPendingDemandeByUserId(){
    this.eventService.getPendingDemandeByUserId(this.id)
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

  public deleteDemande(id: number){
    this.eventService.deleteDemande(id).subscribe(
      (resp) => {
        console.log(resp);
        this.getPendingDemandeByUserId();
      },
      (error:HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

  public openSnackBar(){
        this.snackBar.openFromComponent(SnackbarDemandeAnnulerComponent, {
      duration: 3000,
      panelClass: ['blue-snackbar']
    });
  }

  // public updateDemande(id: number){
  //   this.router.navigate(['/addEvent', {id: id}]); 
  // }

}
