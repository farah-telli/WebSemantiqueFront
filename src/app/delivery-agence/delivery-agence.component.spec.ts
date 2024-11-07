import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryAgenceComponent } from './delivery-agence.component';

describe('DeliveryAgenceComponent', () => {
  let component: DeliveryAgenceComponent;
  let fixture: ComponentFixture<DeliveryAgenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveryAgenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeliveryAgenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
