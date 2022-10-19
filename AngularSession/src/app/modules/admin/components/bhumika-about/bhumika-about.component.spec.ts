import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BhumikaAboutComponent } from './bhumika-about.component';

describe('BhumikaAboutComponent', () => {
  let component: BhumikaAboutComponent;
  let fixture: ComponentFixture<BhumikaAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BhumikaAboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BhumikaAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
