import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-landing-footer',
  templateUrl: './landing-footer.component.html',
  styleUrls: ['./landing-footer.component.css']
})
export class LandingFooterComponent implements OnInit{


  newsLetter = new FormGroup({
    email: new FormControl(' ', [Validators.required, this.customeEmailValidator, Validators.email])
  })
  getError(control:any) : string {
    if(control.errors?.required && control.touched)
      return 'Email is required';
    else if(control.errors?.emailError && control.touched)
      return 'Please enter valid email address';
    else return '';
  }
  customeEmailValidator(control:AbstractControl){
    const pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,20}$/;
    const value = control.value;
    if(!pattern.test(value) && control.touched)
      return{
        emailError: true
      }
    else  return null;

  }

  // get email(){return this.newsLetter.get('email')}
  //
  onSubmit(){
    console.warn(this.newsLetter.value)
  }


  constructor() {}

  ngOnInit(): void{

  }
}
