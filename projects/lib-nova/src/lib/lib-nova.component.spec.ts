import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibNovaComponent } from './lib-nova.component';

describe('LibNovaComponent', () => {
  let component: LibNovaComponent;
  let fixture: ComponentFixture<LibNovaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibNovaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibNovaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
