// your.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ThemeService } from './navbar/theme.service';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routes';
import { MatCardModule } from '@angular/material/card';
import { DSAComponentModule } from './dsa/dsa.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { LoginComponent } from './login/login.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { httpInterceptorProviders } from './_helpers/http.interceptor';


@NgModule({
  declarations: [
    LoginComponent],
  imports: [
    AppComponent,
    CommonModule,
    DSAComponentModule,
    FontAwesomeModule,
    AppRoutingModule,
    BrowserModule,
    MatCardModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    NavbarComponent,
    MatToolbarModule
  ],
  providers: [httpInterceptorProviders],    
})
export class AppModule {}
