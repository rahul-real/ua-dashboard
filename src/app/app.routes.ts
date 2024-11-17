import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DSAComponent } from './dsa/dsa.component';
import { ImagesComponent } from './images/images.component';
import { LoginComponent } from './login/login.component';
import { MatFormFieldModule } from '@angular/material/form-field';

export const routes: Routes = [
  //{ path: 'dsa', component: DSAComponent },
  {
    path:'',
    component:ImagesComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'dsa',
    component:DSAComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}