import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControl} from '@angular/forms';

@Component({
  selector: 'app-nested-form-group',
  templateUrl: './nested-form-group.component.html',
  styleUrls: ['./nested-form-group.component.css']
})
export class NestedFormGroupComponent{

  studentform = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
      address: new FormGroup({
        street: new FormControl(''),
        city: new FormControl(''),
        state: new FormControl(''),
        zip: new FormControl('')
      })
  });

  constructor() { }

  onSubmit(){
    
    // TODO: Use EventEmitter with form value
    console.warn(this.studentform.value);
    
  }

  updateForm() {
    this.studentform.patchValue({
      firstName: 'Bhumika',
      address: {
        street: '123 city Street'
      }
    });
  }

}
