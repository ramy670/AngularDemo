import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BicSearchComponent } from './bic-search.component';

describe('BicSearchComponent', () => {
  let component: BicSearchComponent;
  let fixture: ComponentFixture<BicSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BicSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BicSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
