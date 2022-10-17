import { Component, OnInit } from '@angular/core';

import { Student } from '../student';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent{

  skills = ['Leadership','Emotional Intelligence',
          'TeamWork','Adaptability']
          
  model = new Student(18, 'Allen', this.skills[0], 'VivekaNanda');

  submitted = false;

  onSubmit(){this.submitted = true; }

  constructor() { }

  newStudent() {
    this.model = new Student(42, '', '');
  }
 
}
