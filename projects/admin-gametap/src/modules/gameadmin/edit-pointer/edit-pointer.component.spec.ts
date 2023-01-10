import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPointerComponent } from './edit-pointer.component';

describe('EditPointerComponent', () => {
  let component: EditPointerComponent;
  let fixture: ComponentFixture<EditPointerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPointerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditPointerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
