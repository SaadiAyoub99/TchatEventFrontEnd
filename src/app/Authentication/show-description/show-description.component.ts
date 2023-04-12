import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EventsService } from '../service/events.service';
import { UserAuthService } from '../service/user-auth.service';
import { SnackbarNotezBienComponent } from '../snackbar-notez-bien/snackbar-notez-bien.component';


@Component({
  selector: 'app-show-description',
  templateUrl: './show-description.component.html',
  styleUrls: ['./show-description.component.css']
})
export class ShowDescriptionComponent implements OnInit {

  public dataToShow:any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private eventService: EventsService, private userAuthService: UserAuthService, private snackBar: MatSnackBar) { }


  ngOnInit(): void {
    this.dataToShow = this.data;
  }

  // test(){
  //   console.log("rsjkdasadjlk")
  // }


  public onReserved(id:number){
      // console.log("vdgykjytersgnjjhgf")
      this.eventService.reservedPlace(id, this.userAuthService.getIdUser()).subscribe(
         (resp) => {
            this.dataToShow = this.data;  
         },
         (err) => {
           console.log(err);
         }
      )
    }

    
  public openSnackBar(): void{
    this.snackBar.openFromComponent(SnackbarNotezBienComponent, {
      duration: 3000,
      panelClass: ['blue-snackbar']
    });
  }

}
