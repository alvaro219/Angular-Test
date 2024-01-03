import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../data.service';
import { MapOptions } from 'leaflet';
import { RoadworksResponse, ParkingLorryResponse, WarningResponse, ClosureResponse, ElectricChargingStationResponse, Roadwork, ParkingLorry, Closure, ElectricChargingStation, Warning } from '../../types';
import { firstValueFrom, zip, forkJoin } from 'rxjs';
import { GuiColumn } from '@generic-ui/ngx-grid';
import { icon, latLng, marker, polyline, tileLayer } from 'leaflet';

@Component({
  selector: 'map-route',
  templateUrl: './map.route.html',
})
export class MapRoute {

  autobahnen: string[] = [];


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


