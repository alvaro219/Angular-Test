import { Component, OnInit, Input } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { DataService } from '../../data.service';
import { Roadwork } from '../../types';

@Component({
  selector: 'roadworks',
  templateUrl: './roadworks.component.html',
})
export class RoadworksComponent implements OnInit {
  @Input() id!: string;
  roadworks: Roadwork[] = [];
  error: string | undefined;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    firstValueFrom(this.dataService.getRoadWorks(this.id)).then(res => {
      this.roadworks = res.roadworks;
    }).catch(error => {
      this.error = "Error fetching roadworks"
    });
  }
}
