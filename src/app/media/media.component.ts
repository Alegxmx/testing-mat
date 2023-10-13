import { Component } from '@angular/core';

import { MediaService } from '../services/media.service';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent {
  proxySizes: number[] = [];
  proxySizeAverage = 0;
  devHours: number[] = [];
  devHoursAverage = 0;

  constructor(private mediaService: MediaService) { }

  calcularMedia(numeros: number[]): number {
    if (numeros.length === 0) {
      return 0;
    }
  
    const suma = numeros.reduce((total, numero) => total + numero, 0);
    const media = suma / numeros.length;
  
    // Limitar la media a dos decimales
    const mediaConDosDecimales = Number(media.toFixed(2));
  
    return mediaConDosDecimales;
  }
  

  ngOnInit(): void {
    this.mediaService.getProxySize().subscribe(data => {
      this.proxySizes = data.proxy_size;
      this.proxySizeAverage = this.calcularMedia(this.proxySizes);
    });

    this.mediaService.getDevHours().subscribe(data => {
      this.devHours = data.dev_hours;
      this.devHoursAverage = this.calcularMedia(this.devHours);
    });
  }
}
