import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoComponent } from './video.component';
import { Router, ActivatedRoute } from '@angular/router';

describe('VideoComponent', () => {
  let component: VideoComponent;
  let fixture: ComponentFixture<VideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoComponent ],
      providers:[ActivatedRoute,Router]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
