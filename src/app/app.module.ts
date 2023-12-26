import { NgModule } from '@angular/core';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { GuiGridModule } from '@generic-ui/ngx-grid';

import { AppComponent } from './app.component';
import { RoadworksComponent } from './components/roadworks/roadworks.component';
import { ParkingLorryComponent } from './components/parking_lorry/parking_lorry.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MaterialModule } from './material.module';
import { WarningComponent } from './components/warning/warning.component';
import { ClosureComponent } from './components/closure/closure.component';
import { ChargingStationComponent } from './components/charging_station/charging_station.component';


@NgModule({
  declarations: [
    AppComponent,
    RoadworksComponent,
    ParkingLorryComponent,
    WarningComponent,
    ClosureComponent,
    ChargingStationComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule,
    RouterModule,
    MaterialModule,
    GuiGridModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
