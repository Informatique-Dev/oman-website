import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { NewRequestComponent } from './new-request/new-request.component';
import { ApplicantComponent } from './new-request/applicant/applicant.component';
import { AttatchmentComponent } from './new-request/attatchment/attatchment.component';
import { PaymentComponent } from './new-request/payment/payment.component';
import { ApplyPopupComponent } from './new-request/apply-popup/apply-popup.component';

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
    ApplyPopupComponent,],
  imports: [CommonModule,RouterModule.forChild(routes)],
})
export class PagesModule {}
