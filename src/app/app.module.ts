// your.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterOutlet } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { ThemeService } from './navbar/theme.service';

@NgModule({
  declarations: [],
  imports: [RouterOutlet,CommonModule,BrowserModule, AppComponent,FontAwesomeModule,NavbarComponent],
  providers: [ThemeService],
})
export class AppModule {}
