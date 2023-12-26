import { Component, OnInit, Input } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { DataService } from '../../data.service';
import { Warning } from '../../types';

@Component({
  selector: 'warning',
  templateUrl: './warning.component.html',
})
export class WarningComponent implements OnInit {
  @Input() id!: string;
  warning: Warning[] = [];
  error: string | undefined;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    firstValueFrom(this.dataService.getTrafficWarnings(this.id)).then(res => {
      this.warning = res.warning;
    }).catch(error => {
      this.error = "Error fetching warnings"
    });
  }
}
