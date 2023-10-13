import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { MediaComponent } from './media.component';
import { MediaService } from '../services/media.service'; 
import { MockMediaService } from '../mocks/mock-media.service'; 

describe('MediaComponent', () => {
  let component: MediaComponent;
  let fixture: ComponentFixture<MediaComponent>;
  let mediaService: MockMediaService; // Cambia el tipo del servicio a tu servicio ficticio

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MediaComponent],
      providers: [
        { provide: MediaService, useClass: MockMediaService }, // Proporciona tu servicio ficticio como proveedor
      ],
      imports: [HttpClientModule]
    });
    fixture = TestBed.createComponent(MediaComponent);
    component = fixture.componentInstance;
    mediaService = TestBed.inject(MediaService); 
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should return mean=550.6 from the endpoint proxy_size', () => {
    expect(component.proxySizeAverage).toEqual(550.6);
  });

  it('Should return mean=60.32 with the json 1a_dev_hours', () => {
    expect(component.devHoursAverage).toEqual(60.32);
  });

});

