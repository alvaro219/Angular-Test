import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { firstValueFrom } from 'rxjs';
import { GuiColumn } from '@generic-ui/ngx-grid';
import { ElectricChargingStation } from '../../types';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'charging_stations-route',
  templateUrl: './charging_stations.route.html',
})
export class ElectricChargingStationsRoute implements OnInit {
  road: string | undefined;
  electric_charging_station: ElectricChargingStation[] = [];
  error: string | undefined;
  oninput: any | null;
  webcams: any[] = [];
  source: Array<any> = [];
  columns: Array<GuiColumn> = [];

  constructor(private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.road = params['road'];

      if (this.road !== undefined) {
      firstValueFrom(this.dataService.getElectricChargingStations(this.road!)).then(res => {
        this.electric_charging_station = res.electric_charging_station;
        this.source = this.generateSourceData();
        this.columns = this.generateColumns();
      });
    } else {
      console.error('The value of "road" is undefined.');
    }
    });
  }

  generateSourceData(): Array<any> {
    const newData = this.electric_charging_station.map((charging_stations, index) => {
      return { road: this.road, ...charging_stations }
    });
    return newData;
  }

  generateColumns(): Array<GuiColumn> {
    return [
      {
        header: 'Road',
        field: 'road'
      },
      {
        header: "Identifier",
        field: "identifier"
      },
      {
        header: "Title",
        field: "title"
      },
      {
        header: "Subtitle",
        field: "subtitle"
      },
      {
        header: "Description",
        field: "description"
      },
      // {
      //   header: "Coordinate",
      //   field: "coordinate"
      // },
      // {
      //   header: "Display title",
      //   field: "displayTitle"
      // },
      {
        header: "Extent",
        field: "extent"
      },
      {
        header: "Future",
        field: "future",
        view: "checkbox"
      },
      // {
      //   header: "Icon",
      //   field: "icon"
      // },
      {
        header: "Is Blocked?",
        field: "isBlocked",
        view: "checkbox"
      },
      {
        header: "Point",
        field: "point"
      },
      // {
      //   header: "Route recommendation",
      //   field: "routeRecommendation"
      // },
      {
        header: "Start timestamp",
        field: "startTimestamp",
        view: (value: string) => {
          const datetime = new Date(Date.parse(value))
          return `${datetime.toLocaleDateString()} (${datetime.toLocaleTimeString()})`
        }
      },
      // {
      //   header: "Impact",
      //   field: "impact"
      // },
    ];
  }
}
