import { Component } from '@angular/core';
import { MediaService } from '../services/media.service';

@Component({
  selector: 'app-stddev',
  templateUrl: './stddev.component.html',
  styleUrls: ['./stddev.component.css']
})
export class StddevComponent {
  proxySizes: number[] = [];
  proxySizeStddev: number = 0;
  devHours: number[] = [];
  devHoursStddev: number = 0;

  constructor(private mediaService: MediaService) {}

  calcularMedia(numeros: number[]): number {
    if (numeros.length === 0) {
      return 0;
    }
  
    const suma = numeros.reduce((total, numero) => total + numero, 0);
    const media = suma / numeros.length;
    const mediaConDosDecimales = Number(media.toFixed(2));
  
    return mediaConDosDecimales;
  }

  calcularDesviacionEstandar(numeros: number[]): number {
    if (numeros.length === 0) {
      return 0;
    }
  
    const media = this.calcularMedia(numeros);
  
    const varianza = numeros.reduce((acumulador, numero) => {
      return acumulador + Math.pow(numero - media, 2);
    }, 0) / numeros.length;
  
    return Number(Math.sqrt(varianza).toFixed(2));
  }

  ngOnInit() {
    this.mediaService.getProxySize().subscribe(data => {
      this.proxySizes = data.proxy_size;
      this.proxySizeStddev = this.calcularDesviacionEstandar(this.proxySizes);
    });

    this.mediaService.getDevHours().subscribe(data => {
      this.devHours = data.dev_hours;
      this.devHoursStddev = this.calcularDesviacionEstandar(this.devHours);
    });
  }
  
}
