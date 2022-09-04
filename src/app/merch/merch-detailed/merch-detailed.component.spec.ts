import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchDetailedComponent } from './merch-detailed.component';

describe('MerchDetailedComponent', () => {
  let component: MerchDetailedComponent;
  let fixture: ComponentFixture<MerchDetailedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MerchDetailedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MerchDetailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
