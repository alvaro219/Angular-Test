import { Component, OnInit, Input } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { DataService } from '../../data.service';
import { ParkingLorry } from '../../types';

@Component({
  selector: 'parking-lorry',
  templateUrl: './parking_lorry.component.html',
})
export class ParkingLorryComponent implements OnInit {
  @Input() id!: string;
  parking_lorry: ParkingLorry[] = [];
  error: string | undefined;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    firstValueFrom(this.dataService.getParkingLorry(this.id)).then(res => {
      this.parking_lorry = res.parking_lorry;
    }).catch(error => {
      this.error = "Error fetching parking lorries"
    });
  }
}
