import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-one',
  templateUrl: './form-one.component.html',
  styleUrls: ['./form-one.component.css']
})
export class FormOneComponent{

  name = new FormControl('');
  
  constructor() { }

  // when retrieving form data from a backend API or service, 
  // use the setValue() method to update the control to its new value, 
  // replacing the old value entirely.

  updateName(){
    this.name.setValue('Bhumika');
  }
  
}
