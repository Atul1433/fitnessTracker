import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
 maxDate:any;
  constructor() { }

  ngOnInit() {
    this.maxDate=new Date();
    //this.maxDate.setFullYear(this.maxDate(this.maxDate.getFullYear()-18));
    console.log('this.maxDate');  
  }
  onSubmit(form:NgForm){
    
   
  }

}
