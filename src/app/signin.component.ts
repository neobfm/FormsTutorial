import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 // tslint:disable-next-line: typedef
 loginUser(signinForm: NgForm){
   console.log(signinForm);
   // console.log(signinForm.value.username);
 }
}
