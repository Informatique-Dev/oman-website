import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { NewRequestComponent } from './new-request/new-request.component';
import { ApplicantComponent } from './new-request/applicant/applicant.component';
import { AttatchmentComponent } from './new-request/attatchment/attatchment.component';
import { PaymentComponent } from './new-request/payment/payment.component';
import { ApplyPopupComponent } from './new-request/apply-popup/apply-popup.component';
import { SharedModule } from '../shared/shared.module';
import {MatTabsModule} from '@angular/material/tabs';
import {STEPPER_GLOBAL_OPTIONS} from "@angular/cdk/stepper";
import {PdfViewerModule} from "ng2-pdf-viewer";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'request',
    component: NewRequestComponent,
  },

];

@NgModule({
  declarations: [HomeComponent,
     NewRequestComponent,
    ApplicantComponent,
    AttatchmentComponent,
    PaymentComponent,
    ApplyPopupComponent
  ],
  providers: [ {
    provide: STEPPER_GLOBAL_OPTIONS,
    useValue: {displayDefaultIndicatorType: false},
  },],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes), MatTabsModule, PdfViewerModule],
})
export class PagesModule {}
