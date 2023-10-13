import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class MediaService {
    private apiUrl = 'https://api-cv-service-alegxmx.cloud.okteto.net';

    constructor(private http: HttpClient) { }

    getProxySize(): Observable<{ proxy_size: number[] }> {
        return this.http.get<{ proxy_size: number[] }>(`${this.apiUrl}/proxy_size`);
    }

    getDevHours(): Observable<{ dev_hours: number[] }> {
        return this.http.get<{ dev_hours: number[] }>(`${this.apiUrl}/dev_hours`);
    }
}

