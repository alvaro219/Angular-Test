import { Component } from '@angular/core';
import { DataService } from '../../data.service';
import { latLng, tileLayer } from 'leaflet';

@Component({
  selector: 'map-route',
  templateUrl: './map.route.html',
})
export class MapRoute {
  constructor(private dataService: DataService) { }


  options = {
    layers: [
      tileLayer('https://tile.openstreetmap.de/{z}/{x}/{y}.png', {
        attribution: '&amp;copy; OpenStreetMap contributors'
      })
    ],
    zoom: 10,
    center: latLng([ 51, 9 ])

  };
};


