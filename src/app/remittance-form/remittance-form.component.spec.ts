import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemittanceFormComponent } from './remittance-form.component';

describe('RemittanceFormComponent', () => {
  let component: RemittanceFormComponent;
  let fixture: ComponentFixture<RemittanceFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RemittanceFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemittanceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
