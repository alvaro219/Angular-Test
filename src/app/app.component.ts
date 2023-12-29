import { Component, OnInit, Input } from '@angular/core';
import { DataService } from './data.service';
import { RoadworksResponse, ParkingLorryResponse, WarningResponse, ClosureResponse, ElectricChargingStationResponse, Roadwork, ParkingLorry, Warning, Closure, ElectricChargingStation } from './types';
import { firstValueFrom, zip, forkJoin } from 'rxjs';
import { GuiColumn } from '@generic-ui/ngx-grid';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  @Input() id!: string;
  roadworks: { [key: string]: RoadworksResponse } = {};
  parkings: { [key: string]: ParkingLorryResponse } = {};
  warnings: { [key: string]: WarningResponse } = {};
  closures: { [key: string]: ClosureResponse } = {};
  chargingStations: { [key: string]: ElectricChargingStationResponse } = {};
  error: string | undefined;
  oninput: any | null;
  autobahnen: string[] = [];
  roadWorkDetails: any[] = [];
  webcams: any[] = [];
  source: Array<any> = [];
  columns: Array<GuiColumn> = [];

  title = 'Angular_Test';

  constructor(private dataService: DataService) { }

  ngOnInit() {
    // firstValueFrom(this.dataService.getAutobahnen()).then(res => {
    //   this.autobahnen = res.roads;

    //   this.autobahnen.forEach(road => {
    //     forkJoin({
    //       roadworks: this.dataService.getRoadWorks(road),
    //       parkings: this.dataService.getParkingLorry(road),
    //       warnings: this.dataService.getTrafficWarnings(road),
    //       closures: this.dataService.getClosures(road),
    //       chargingStations: this.dataService.getElectricChargingStations(road),
    //     }).subscribe(data => {
    //       this.roadworks[road] = data.roadworks;
    //       this.parkings[road] = data.parkings;
    //       this.warnings[road] = data.warnings;
    //       this.closures[road] = data.closures;
    //       this.chargingStations[road] = data.chargingStations;
    //       this.source = this.generateSourceData();
    //       this.columns = this.generateColumns(road);
    //     });
    //   });
    // });
  }

  generateSourceData(): Array<any> {
    const newData = this.autobahnen.map((road, index) => {
      const chargingStationData = this.chargingStations[road];
      return {
        first_column: road,
        second_column: this.roadworks[road]?.roadworks,
         third_column: this.parkings[road]?.parking_lorry,
         fourth_column: this.warnings[road]?.warning,
         fifth_column: this.closures[road]?.closure,
         sixth_column: this.chargingStations[road]?.electric_charging_station,
      };
    });
    return newData;
  }

  generateColumns(road: string): Array<GuiColumn> {
    const buildTemplate = (arr: Array<any> | undefined, seeAll: (n: number) => string, notFound: string, loading = "Loading...") => {
      if (arr === undefined || arr === null) {
        return loading
      }
      if (!arr.length) {
        return notFound
      }
      return seeAll(arr.length)
    }
    return [
      {
        header: 'Road',
        field: 'first_column'
      },
      {
        header: 'Works',
        field: 'second_column',
        view: (value: Roadwork[] | undefined) => {
          return buildTemplate(value,
            n => `<a href="/works/${road}">See all ${n} roadworks</a>`,
            "No roadworks found for this autobahn"
          )
        }
      },
       {
        header: 'Parking Lorries',
         field: 'third_column',
         view: (value: ParkingLorry[] | undefined) => {
          return buildTemplate(value,
            n => `<a href="/parkings/${road}">See all ${n} parkings</a>`,
            "No parkings found for this autobahn"
          )
         }
       },
       {
         header: 'Warnings',
         field: 'fourth_column',
         view: (value: Warning[] | undefined) => {
          return buildTemplate(value,
            n => `<a href="/warnings/${road}">See all ${n} warnings</a>`,
            "No warnings found for this autobahn"
          )
         }
       },
      {
         header: 'Closures',
         field: 'fifth_column',
         view: (value: Closure[] | undefined) => {
          return buildTemplate(value,
            n => `<a href="/closure/${road}">See all ${n} closures</a>`,
            "No closures found for this autobahn"
          )
         }
       },
       {
         header: 'Charging Stations',
         field: 'sixth_column',
         view: (value: ElectricChargingStation[] | undefined) => {
          return buildTemplate(value,
            n => `<a href="/charging_station/${road}">See all ${n} electric charging stations</a>`,
            "No electric charging stations found for this autobahn"
          )
         }
       }
    ];
  }
}
