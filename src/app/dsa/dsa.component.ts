import { Component, NgModule } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card'; // Import MatCardModule

@Component({
  selector: 'app-dsa',
  styleUrls: ['./dsa.component.css'],  // Use 'styleUrls' instead of 'styleUrl'
  templateUrl: './dsa.component.html',
})

export class DSAComponent {}

@NgModule({
  declarations: [DSAComponent],
  imports: [CommonModule, NavbarComponent, MatCardModule], // Include MatCardModule here
})
export class DSAComponentModule {}
