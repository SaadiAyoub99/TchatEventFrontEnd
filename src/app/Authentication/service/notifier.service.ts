import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotifierDeleteEventByAdminComponent } from '../notifications/notifier-delete-event-by-admin/notifier-delete-event-by-admin.component';

@Injectable({
  providedIn: 'root'
})
export class NotifierService {

  constructor(private snackbar: MatSnackBar) { }

  showNotificationDeletedItemByAdmin(displayMessage: any, buttonText: any, messageType: 'error' | 'success' ){
    this.snackbar.openFromComponent(NotifierDeleteEventByAdminComponent ,{
      data: {
        message: displayMessage,
        buttonText: buttonText
      },
      duration:5000,
      horizontalPosition:'center',
      verticalPosition:'bottom',
      panelClass: messageType 
    });
  }
}
