import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ElectricChargingStationResponse, ElectricChargingStation, RoadListResponse, RoadworksResponse, ParkingLorryResponse, Warning, WarningResponse, ClosureResponse } from './types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl = 'https://verkehr.autobahn.de/o/autobahn/';

  constructor(private http: HttpClient) { }

  getAutobahnen(): Observable<RoadListResponse> {
    return this.http.get<any>(this.apiUrl)
  }

  getRoadWorks(roadId: string): Observable<RoadworksResponse> {
    const url = `${this.apiUrl}/${roadId}/services/roadworks`;
    return this.http.get<any>(url);
  }

  getParkingLorry(roadId: string): Observable<ParkingLorryResponse> {
    const url = `${this.apiUrl}/${roadId}/services/parking_lorry`;
    return this.http.get<any>(url);
  }

  getTrafficWarnings(roadId: string): Observable<WarningResponse> {
    const url = `${this.apiUrl}/${roadId}/services/warning`;
    return this.http.get<any>(url);
  }

  getClosures(roadId: string): Observable<ClosureResponse> {
    const url = `${this.apiUrl}/${roadId}/services/closure`;
    return this.http.get<ClosureResponse>(url);
  }

  getElectricChargingStations(roadId: string): Observable<ElectricChargingStationResponse> {
    const url = `${this.apiUrl}/${roadId}/services/electric_charging_station`;
    return this.http.get<ElectricChargingStationResponse>(url)
  }

  getElectricChargingStationDetails(stationId: string): Promise<any> {
    const url = `${this.apiUrl}/chargingstationdetails/${stationId}`;
    return this.http.get<any>(url).toPromise();
  }
}
