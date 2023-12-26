import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { ElectricChargingStation, ElectricChargingStationResponse } from './types';
import { firstValueFrom } from 'rxjs';
import { GuiColumn } from '@generic-ui/ngx-grid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  autobahnen: string[] = [];
  roadWorkDetails: any[] = [];
  webcams: any[] = [];
  webcamDetails: any[] = [];
  restAreas: any[] = [];
  lorryParkings: any[] = [];
  lorryParkingDetails: any[] = [];
  trafficWarnings: any[] = [];
  trafficWarningDetails: any[] = [];
  closures: any[] = [];
  closureDetails: any[] = [];
  electricChargingStations: ElectricChargingStation[] = [];
  electricChargingStationDetails: any[] = [];
  station: any;
  source: Array<any> = [];
  columns: Array<GuiColumn> = [];

  title = 'Angular_Test';

  constructor(private dataService: DataService) { }

  ngOnInit() {
    firstValueFrom(this.dataService.getAutobahnen()).then(res => {
      this.autobahnen = res.roads;
      this.source = this.generateSourceData();
      this.columns = this.generateColumns();
    });
  }

  generateSourceData(): Array<any> {
    const newData = this.autobahnen.map(road => {
      return{
        first_column: road,
        second_column: 'Lorem Ipsum',
        third_column: 'Lorem Ipsum',
        fourth_column: 'Lorem Ipsum',
        fifth_column: 'Lorem Ipsum',
        sixth_column: 'Lorem Ipsum',
      };
    });
    return newData;
  }
  generateColumns(): Array<GuiColumn> {
    return [
      {
        header: 'Road',
        field: 'first_column'
      },
      {
        header: 'Works',
        field: 'second_column'
      },
      {
        header: 'Parking Lorries',
        field: 'third_column'
      },
      {
        header: 'Warnings',
        field: 'fourth_column'
      },
      {
        header: 'Closures',
        field: 'fifth_column'
      },
      {
        header: 'Charging Stations',
        field: 'sixth_column'
      }
    ];
  }
}

