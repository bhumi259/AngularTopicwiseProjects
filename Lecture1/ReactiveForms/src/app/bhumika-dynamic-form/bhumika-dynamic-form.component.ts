import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-bhumika-dynamic-form',
  templateUrl: './bhumika-dynamic-form.component.html',
  styleUrls: []
})
export class BhumikaDynamicFormComponent {

  constructor(private fb:FormBuilder) { }

  studentForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
    skills: this.fb.array([   
      this.fb.control('')
    ])
  });

  get skills() {
    return this.studentForm.get('skills') as FormArray;
  }

  addSkill() {
    this.skills.push(this.fb.control(''));
  }

  updateForm() {
    this.studentForm.patchValue({
      firstName: 'Bhumika',
      address: {
        street: '123 city Street'
      }
    });
  }

  onSubmit(){
    
    // TODO: Use EventEmitter with form value
    console.warn(this.studentForm.value);
    
  }
}
