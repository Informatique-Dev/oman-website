import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent {
 constructor(private router: Router) {
 }

 navigateToHome(): void {
   this.router.navigateByUrl('/home');
 }

  navigateToLogin(): void {
    this.router.navigateByUrl('/login');
  }
}
