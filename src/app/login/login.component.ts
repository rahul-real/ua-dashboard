import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { NavbarComponent } from '../navbar/navbar.component';
import { AppModule } from '../app.module';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-login',
  styleUrls: ['./login.component.css'],
  templateUrl: './login.component.html',

})
export class LoginComponent implements OnInit {
  formGroup!: FormGroup;
  constructor(private authservice:AuthService) {}
  ngOnInit(): void {
    this.initForm();
  }
    initForm(){
      this.formGroup = new FormGroup({
        email: new FormControl('',[Validators.required]),
        password: new FormControl('',[Validators.required]),
      })
    }
  loginProcess() {
    if(this.formGroup.valid){
      this.authservice.login(this.formGroup.value).subscribe(result=>{
        if(result.email){
          console.log(result);
        }else{
          alert(result.password)
        }
      });
    }
  }    
}