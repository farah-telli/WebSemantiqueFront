import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecycledProductComponent } from './recycled-product.component';

describe('RecycledProductComponent', () => {
  let component: RecycledProductComponent;
  let fixture: ComponentFixture<RecycledProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecycledProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecycledProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
