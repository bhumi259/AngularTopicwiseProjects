import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BhumikaServicesComponent } from './bhumika-services.component';

describe('BhumikaServicesComponent', () => {
  let component: BhumikaServicesComponent;
  let fixture: ComponentFixture<BhumikaServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BhumikaServicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BhumikaServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
