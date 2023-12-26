import { Component, OnInit, Input } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { DataService } from '../../data.service';
import { ElectricChargingStation } from '../../types';

@Component({
  selector: 'charging-station',
  templateUrl: './charging_station.component.html',
})
export class ChargingStationComponent implements OnInit {
  @Input() id!: string;
  charging_station: ElectricChargingStation[] = [];
  error: string | undefined;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    firstValueFrom(this.dataService.getElectricChargingStations(this.id)).then(res => {
      this.charging_station = res.electric_charging_station;
    }).catch(error => {
      this.error = "Error fetching closures"
    });
  }
}
