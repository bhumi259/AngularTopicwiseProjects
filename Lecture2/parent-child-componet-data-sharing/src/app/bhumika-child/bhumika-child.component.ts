import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-bhumika-child',
  templateUrl: './bhumika-child.component.html',
  styleUrls: ['./bhumika-child.component.css']
})
export class BhumikaChildComponent implements OnInit {
  
  @Output() newItemEvent = new EventEmitter<string>();

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
