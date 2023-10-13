import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StddevComponent } from './stddev.component';
import { MediaService } from '../services/media.service';
import { MockMediaService } from '../mocks/mock-media.service';

describe('StddevComponent', () => {
  let component: StddevComponent;
  let fixture: ComponentFixture<StddevComponent>;
  let mediaService: MockMediaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StddevComponent],
      providers: [
        { provide: MediaService, useClass: MockMediaService },
      ],
    });
    fixture = TestBed.createComponent(StddevComponent);
    component = fixture.componentInstance;
    mediaService = TestBed.inject(MediaService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should return stddev=542.67', () => {
    expect(component.proxySizeStddev).toEqual(542.67);
  });

  it('Should return stddev=59.06', () => {
    expect(component.devHoursStddev).toEqual(59.06);
  });
});
