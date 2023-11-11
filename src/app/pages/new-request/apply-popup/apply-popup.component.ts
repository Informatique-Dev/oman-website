import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-apply-popup',
  templateUrl: './apply-popup.component.html',
  styleUrls: ['./apply-popup.component.scss']
})
export class ApplyPopupComponent {

  constructor(private dialogRef: MatDialogRef<ApplyPopupComponent>){}

  closePopUp(){
    this.dialogRef.close(null);
  
    }
}
