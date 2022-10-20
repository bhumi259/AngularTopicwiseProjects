import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BhumikaContactComponent } from './bhumika-contact.component';

describe('BhumikaContactComponent', () => {
  let component: BhumikaContactComponent;
  let fixture: ComponentFixture<BhumikaContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BhumikaContactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BhumikaContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
