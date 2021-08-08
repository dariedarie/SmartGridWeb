import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class MapService {
    public lat: Number;
    public lon: Number;
    constructor() {
      this.lat = 0;
      this.lon = 0;
    }

    
}