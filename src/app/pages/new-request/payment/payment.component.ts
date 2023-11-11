import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ApplyPopupComponent } from '../apply-popup/apply-popup.component';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent {
  @Output() moveNext: EventEmitter<void> = new EventEmitter<void>();

  constructor(private dialog: MatDialog){}

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = "25vw";
    dialogConfig.height = "25vw";
    this.dialog.open(ApplyPopupComponent, dialogConfig);
    

}
}
