import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl = 'https://verkehr.autobahn.de/o/autobahn/';

  constructor(private http: HttpClient) { }

  getAutobahnen(): Promise<string[]> {
    return this.http.get<any>(this.apiUrl)
      .toPromise()
      .then(response => response.roads as string[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Error:', error);
    return Promise.reject(error.message || error);
  }

  getRoadWorks(roadId: string): Promise<any> {
    const url = `${this.apiUrl}/${roadId}/services/roadworks`;
    return this.http.get<any>(url).toPromise();
  }

  getRoadWorkDetails(roadworkId: string): Promise<any> {
    const url = `${this.apiUrl}/roadworkdetails/${roadworkId}`;
    return this.http.get<any>(url).toPromise();
  }

  getWebcams(roadId: string): Promise<any> {
    const url = `${this.apiUrl}/${roadId}/services/webcams`;
    return this.http.get<any>(url).toPromise();
  }

  getWebcamDetails(webcamId: string): Promise<any> {
    const url = `${this.apiUrl}/webcamdetails/${webcamId}`;
    return this.http.get<any>(url).toPromise();
  }

  getRestAreas(roadId: string): Promise<any> {
    const url = `${this.apiUrl}/${roadId}/services/restareas`;
    return this.http.get<any>(url).toPromise();
  }

  getLorryParkings(roadId: string): Promise<any> {
    const url = `${this.apiUrl}/${roadId}/services/lorryparkings`;
    return this.http.get<any>(url).toPromise();
  }

  getLorryParkingDetails(lorryId: string): Promise<any> {
    const url = `${this.apiUrl}/lorryparkingdetails/${lorryId}`;
    return this.http.get<any>(url).toPromise();
  }

  getTrafficWarnings(roadId: string): Promise<any> {
    const url = `${this.apiUrl}/${roadId}/services/warnings`;
    return this.http.get<any>(url).toPromise();
  }

  getTrafficWarningDetails(warningId: string): Promise<any> {
    const url = `${this.apiUrl}/warnings/${warningId}`;
    return this.http.get<any>(url).toPromise();
  }

  getClosures(roadId: string): Promise<any> {
    const url = `${this.apiUrl}/${roadId}/services/closures`;
    return this.http.get<any>(url).toPromise();
  }

  getClosureDetails(closureId: string): Promise<any> {
    const url = `${this.apiUrl}/closures/${closureId}`;
    return this.http.get<any>(url).toPromise();
  }

  getElectricChargingStations(roadId: string): Promise<any> {
    const url = `${this.apiUrl}/${roadId}/services/chargingstations`;
    return this.http.get<any>(url).toPromise();
  }

  getElectricChargingStationDetails(stationId: string): Promise<any> {
    const url = `${this.apiUrl}/chargingstationdetails/${stationId}`;
    return this.http.get<any>(url).toPromise();
  }
}
