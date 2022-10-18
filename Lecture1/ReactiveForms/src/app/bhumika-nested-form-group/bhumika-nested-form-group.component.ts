import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-bhumika-nested-form-group',
  templateUrl: './bhumika-nested-form-group.component.html',
  styleUrls: []
})
export class BhumikaNestedFormGroupComponent {
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

  onSubmit() {

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
