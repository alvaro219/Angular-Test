import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { Roadwork } from '../../types';
import { firstValueFrom } from 'rxjs';
import { GuiColumn } from '@generic-ui/ngx-grid';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'works-route',
  templateUrl: './works.route.html',
})
export class WorksRoute implements OnInit {
  road: string | undefined;
  roadworks: Roadwork[] = [];
  error: string | undefined;
  oninput: any | null;
  source: Array<any> = [];
  columns: Array<GuiColumn> = [];

  constructor(private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.road = params['road'];

      if (this.road !== undefined) {
      firstValueFrom(this.dataService.getRoadWorks(this.road!)).then(res => {
        this.roadworks = res.roadworks;
        this.source = this.generateSourceData();
        this.columns = this.generateColumns();
      });
    } else {
      console.error('The value of "road" is undefined.');
    }
    });
  }

  generateSourceData(): Array<any> {
    const newData = this.roadworks.map((roadwork, index) => {
      return { road: this.road, ...roadwork }
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
