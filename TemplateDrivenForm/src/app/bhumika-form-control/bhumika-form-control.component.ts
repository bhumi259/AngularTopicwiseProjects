import { Component} from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-bhumika-form-control',
  templateUrl: './bhumika-form-control.component.html',
  styleUrls: []
})
export class BhumikaFormControlComponent{

  name = new FormControl('');

  constructor() { }

  // when retrieving form data from a backend API or service, 
  // use the setValue() method to update the control to its new value, 
  // replacing the old value entirely.

  updateName() {
    this.name.setValue('Bhumika');
  }
}
