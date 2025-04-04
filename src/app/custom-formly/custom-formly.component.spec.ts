import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomFormlyComponent } from './custom-formly.component';

describe('CustomFormlyComponent', () => {
  let component: CustomFormlyComponent;
  let fixture: ComponentFixture<CustomFormlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomFormlyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomFormlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
