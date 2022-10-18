import { Component, OnInit } from '@angular/core';
import { BhumikaStudent } from '../bhumika-student';

@Component({
  selector: 'app-bhumika-student-form',
  templateUrl: './bhumika-student-form.component.html',
  styleUrls: ['./bhumika-student-form.component.css']
})
export class BhumikaStudentFormComponent {

  skills = ['Leadership','Emotional Intelligence',
          'TeamWork','Adaptability']
          
  model = new BhumikaStudent
  (18, 'Allen', this.skills[0], 'VivekaNanda');

  submitted = false;

  onSubmit(){this.submitted = true; }

  constructor() { }

  newStudent() {
    this.model = new BhumikaStudent(42, '', '');
  }
 

}
