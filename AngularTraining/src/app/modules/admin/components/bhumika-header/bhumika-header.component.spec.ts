import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BhumikaHeaderComponent } from './bhumika-header.component';

describe('BhumikaHeaderComponent', () => {
  let component: BhumikaHeaderComponent;
  let fixture: ComponentFixture<BhumikaHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BhumikaHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BhumikaHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
