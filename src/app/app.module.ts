import { NgModule } from '@angular/core';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { RouterModule, provideRouter } from '@angular/router';
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
import { HomeRoute } from './routes/home/home.route';
import { WorksRoute } from './routes/works/works.route';
import { ParkingsRoute } from './routes/parkings/parkings.route';
import { WarningsRoute } from './routes/warnings/warnings.route';
import { ClosuresRoute } from './routes/closures/closures.route';
import { ElectricChargingStationsRoute } from './routes/electric_charging_stations/charging_stations.route'
import { routes } from './app.routes';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { MapRoute } from './routes/map/map.route';


@NgModule({
  declarations: [
    AppComponent,
    RoadworksComponent,
    ParkingLorryComponent,
    WarningComponent,
    ClosureComponent,
    ChargingStationComponent,
    HomeRoute,
    WorksRoute,
    ParkingsRoute,
    WarningsRoute,
    ClosuresRoute,
    ElectricChargingStationsRoute,
    MapRoute

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule,
    RouterModule,
    MaterialModule,
    GuiGridModule,
    LeafletModule,
  ],
  providers: [provideRouter(routes)],
  bootstrap: [AppComponent]
})
export class AppModule { }
