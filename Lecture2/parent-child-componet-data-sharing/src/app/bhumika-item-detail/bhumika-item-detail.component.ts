import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-bhumika-item-detail',
  templateUrl: './bhumika-item-detail.component.html',
  styleUrls: ['./bhumika-item-detail.component.css']
})
export class BhumikaItemDetailComponent{
  
  @Input() item = '';

  constructor(){}

  
}
