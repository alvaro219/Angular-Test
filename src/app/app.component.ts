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

  title = 'Angular_Test';

  constructor(private dataService: DataService) { }

  ngOnInit() {
    firstValueFrom(this.dataService.getAutobahnen()).then(res => {
      this.autobahnen = res.roads;
    });
  }
  source: Array<any> = [
    {
      name: 'Brad',
      job: 'programmer',
      age: '40'
    },
    {
      name: 'John',
      job: 'athlete',
      age: '22'
    },
    {
      name: 'Eve',
      job: 'artist',
      age: '25'
    }
];
columns: Array<GuiColumn> = [
  {
    header: 'Name',
    field: 'name'
  },
  {
    header: 'Job',
    field: 'job'
  },
  {
    header: 'Age',
    field: 'age'
  }
];
}
