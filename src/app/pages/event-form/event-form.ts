import { Component,INJECTOR,input,signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  FormControlStatus,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { title } from 'process';
import { minLength } from '@angular/forms/signals';


@Component({
  selector: 'app-event-form',
  imports: [],
  templateUrl: './event-form.html',
  styleUrl: './event-form.css',
})
export class EventForm {
  signupForm!: FormGroup;
  ngOnInit(){
    this.signupForm=new FormGroup({
      title:new FormControl('',[Validators.minLength(5),Validators.maxLength(50)]),
      category:new FormControl('',),
      date:new FormControl('',[Validators.required]),
      place:new FormControl('',[Validators.minLength(3)]),
      price:new FormControl('',[Validators.min(1)]),
      imageUrl:new FormControl('',[Validators.nullValidator]),
      description:new FormControl('',[Validators.minLength(20),Validators.required]),
    })



  }
  
  
}


