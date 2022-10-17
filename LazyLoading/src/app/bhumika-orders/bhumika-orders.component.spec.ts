import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BhumikaOrdersComponent } from './bhumika-orders.component';

describe('BhumikaOrdersComponent', () => {
  let component: BhumikaOrdersComponent;
  let fixture: ComponentFixture<BhumikaOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BhumikaOrdersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BhumikaOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
