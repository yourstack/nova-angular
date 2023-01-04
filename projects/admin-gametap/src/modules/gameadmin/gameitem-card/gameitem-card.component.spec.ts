import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameitemCardComponent } from './gameitem-card.component';

describe('GameitemCardComponent', () => {
  let component: GameitemCardComponent;
  let fixture: ComponentFixture<GameitemCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameitemCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameitemCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
