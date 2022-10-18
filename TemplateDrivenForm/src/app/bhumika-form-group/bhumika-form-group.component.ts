import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-bhumika-form-group',
  templateUrl: './bhumika-form-group.component.html',
  styleUrls: []
})
export class BhumikaFormGroupComponent {

  
  constructor() { }

  // form group Example
  studentForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });

  onSubmit(){
    
    // TODO: Use EventEmitter with form value
    console.warn(this.studentForm.value);
    
  }
}
