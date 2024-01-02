import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../data.service';
import { RoadworksResponse, ParkingLorryResponse, WarningResponse, ClosureResponse, ElectricChargingStationResponse, Roadwork, ParkingLorry } from '../../types';
import { firstValueFrom, zip, forkJoin } from 'rxjs';
import { GuiColumn } from '@generic-ui/ngx-grid';
import { Closure, ElectricChargingStation, Warning } from '../../types';
import { ActivatedRoute } from '@angular/router';
import { GuiDataType } from '@generic-ui/ngx-grid';



@Component({
  selector: 'parkings-route',
  templateUrl: './parkings.route.html',
})
export class ParkingsRoute implements OnInit {
  road: string | undefined;
  parking_lorry: ParkingLorry[] = [];
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
      firstValueFrom(this.dataService.getParkingLorry(this.road!)).then(res => {
        this.parking_lorry = res.parking_lorry;
        this.source = this.generateSourceData();
        this.columns = this.generateColumns();
      });
    } else {
      console.error('The value of "road" is undefined.');
    }
    });
  }

  generateSourceData(): Array<any> {
    const newData = this.parking_lorry.map((parkings, index) => {
      return { road: this.road, ...parkings }
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
      {
        header: "Subtitle",
        field: "subtitle"
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
