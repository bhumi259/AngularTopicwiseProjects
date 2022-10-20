import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BhumikaFooterComponent } from './bhumika-footer.component';

describe('BhumikaFooterComponent', () => {
  let component: BhumikaFooterComponent;
  let fixture: ComponentFixture<BhumikaFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BhumikaFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BhumikaFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
