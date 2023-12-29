import { Routes } from '@angular/router';
import { HomeRoute } from './routes/home/home.route';
import { WorksRoute } from './routes/works/works.route';

export const routes: Routes = [
  { path: "", component: HomeRoute },
  { path: "works/:road", component: WorksRoute },
];
