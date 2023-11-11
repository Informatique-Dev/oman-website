import { Component, ViewChild } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-new-request',
  templateUrl: './new-request.component.html',
  styleUrls: ['./new-request.component.scss']
})
export class NewRequestComponent {
  @ViewChild('stepper') stepper!: MatStepper;
  isLinear = true;
  selectedStepper!:any

  moveNext(): void {
    this.stepper?.next();
  }

  stepChanged(event: {}, stepper: MatStepper): void {
    this.selectedStepper = stepper;
    // @ts-ignore
    stepper.selected.interacted = false;
  }


  interacted(event: { interacted: boolean }): void {
    event.interacted = false;
  }

}
