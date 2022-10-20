import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BhumikaHomeComponent } from './bhumika-home.component';

describe('BhumikaHomeComponent', () => {
  let component: BhumikaHomeComponent;
  let fixture: ComponentFixture<BhumikaHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BhumikaHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BhumikaHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
