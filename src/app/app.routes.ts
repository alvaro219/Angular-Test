import { Routes } from '@angular/router';
import { HomeRoute } from './routes/home/home.route';
import { WorksRoute } from './routes/works/works.route';
import { ParkingsRoute } from './routes/parkings/parkings.route';
import { WarningsRoute } from './routes/warnings/warnings.route';
import { ClosuresRoute } from './routes/closures/closures.route';
import { ElectricChargingStationsRoute } from './routes/electric_charging_stations/charging_stations.route'

export const routes: Routes = [
  { path: "", component: HomeRoute },
  { path: "works/:road", component: WorksRoute },
  { path: "parkings/:road", component: ParkingsRoute},
  { path: "warnings/:road", component: WarningsRoute},
  { path: "closure/:road", component: ClosuresRoute},
  { path: "charging_station/:road", component: ElectricChargingStationsRoute},
];
