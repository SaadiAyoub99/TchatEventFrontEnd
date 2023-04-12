import { Component, Inject, INJECTOR, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarRef, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'app-notifier-delete-event-by-admin',
  templateUrl: './notifier-delete-event-by-admin.component.html',
  styleUrls: ['./notifier-delete-event-by-admin.component.css']
})
export class NotifierDeleteEventByAdminComponent implements OnInit {

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any,
    public snackBarRef: MatSnackBarRef<NotifierDeleteEventByAdminComponent>) { }

  ngOnInit(): void {
  }

}
