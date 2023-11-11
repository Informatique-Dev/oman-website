import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { RootComponent } from './core/Layout/root/root.component';
import { HeaderComponent } from './core/Layout/header/header.component';
import { FooterComponent } from './core/Layout/footer/footer.component';
import { MenuComponent } from './core/Layout/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    RootComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
