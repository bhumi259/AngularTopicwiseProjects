import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent {

  studentform = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
      address: this.fb.group({
        street:   [''],
        city:  [''],
        state:  [''],
        zip:  ['']
      })
  });

  constructor(private fb:FormBuilder) { }

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

//By using form builder you can write it in just few lines

//Add Validation Use the following steps to add form validation.

    // Import a validator function in your form component.
    // Add the validator to the field in the form.
    // Add logic to handle the validation status.
