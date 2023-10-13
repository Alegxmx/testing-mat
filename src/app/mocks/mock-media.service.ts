import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable()
export class MockMediaService {
    getProxySize() {
        return of({
            "proxy_size": [160, 591, 114, 229, 230, 270, 128, 1657, 624, 1503]
        });
    }

    getDevHours() {
        return of({
            "dev_hours": [15, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2]
        });
    }
}