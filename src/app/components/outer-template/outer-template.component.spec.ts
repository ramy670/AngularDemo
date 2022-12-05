import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OuterTemplateComponent } from './outer-template.component';

describe('OuterTemplateComponent', () => {
  let component: OuterTemplateComponent;
  let fixture: ComponentFixture<OuterTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OuterTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OuterTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
