import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedCardComponent } from './selected-card.component';

describe('SelectedCardComponent', () => {
  let component: SelectedCardComponent;
  let fixture: ComponentFixture<SelectedCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectedCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectedCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
