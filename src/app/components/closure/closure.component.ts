import { Component, OnInit, Input } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { DataService } from '../../data.service';
import { Closure } from '../../types';

@Component({
  selector: 'closure',
  templateUrl: './closure.component.html',
})
export class ClosureComponent implements OnInit {
  @Input() id!: string;
  closure: Closure[] = [];
  error: string | undefined;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    firstValueFrom(this.dataService.getClosures(this.id)).then(res => {
      this.closure = res.closure;
    }).catch(error => {
      this.error = "Error fetching closures"
    });
  }
}
