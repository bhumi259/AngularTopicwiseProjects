import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BhumikaAdminDashboardComponent } from './bhumika-admin-dashboard.component';

describe('BhumikaAdminDashboardComponent', () => {
  let component: BhumikaAdminDashboardComponent;
  let fixture: ComponentFixture<BhumikaAdminDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BhumikaAdminDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BhumikaAdminDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
