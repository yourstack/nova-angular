import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule} from '@angular/common/http'
import { VideoService } from './video.service';

describe('VideoService', () => {
  let service: VideoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule,HttpClientTestingModule],
      // providers:[HttpClientModule]
    });
    service = TestBed.inject(VideoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
