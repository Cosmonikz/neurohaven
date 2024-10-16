import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsScreenComponent } from './results-screen.component';

describe('ResultsScreenComponent', () => {
  let component: ResultsScreenComponent;
  let fixture: ComponentFixture<ResultsScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultsScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultsScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
