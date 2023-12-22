import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  autobahnen: string[] = [];
  roadworks: any[] = [];
  roadWorkDetails: any[] = [];
  webcams: any[] = [];
  webcamDetails: any[] = [];
  restAreas: any[] = [];
  lorryParkings: any[] = [];
  lorryParkingDetails: any[] = [];
  trafficWarnings: any[] = [];
  trafficWarningDetails: any[] = [];
  closures: any[] = [];
  closureDetails: any[] = [];
  electricChargingStations: any[] = [];
  electricChargingStationDetails: any[] = [];

  title = 'Angular_Test';

  constructor(private dataService: DataService) { }

  ngOnInit() {

    this.dataService.getAutobahnen().then(roads => {
      this.autobahnen = roads;
      if (this.autobahnen.length > 0) {
        const roadId = this.autobahnen[0];
        this.dataService.getRoadWorks(roadId).then(works => this.roadworks = works.roadworks);
      }
    });

    this.dataService.getAutobahnen().then(roads => this.autobahnen = roads);

    const roadId = 'A1';
    this.dataService.getRoadWorks(roadId).then(works => this.roadworks = works.roadworks);

    const roadworkId = 'Uk9BRFdPUktTX19tZG0ubndfXzAyLTgwMDAwIEQgNzEgMTkgMDkvS0xCV1JO';
    this.dataService.getRoadWorkDetails(roadworkId).then(details => this.roadWorkDetails = details);

    this.dataService.getWebcams(roadId).then(webcams => this.webcams = webcams.webcam);

    const webcamId = 'V0VCQ0FNX19OUldfU2lsYS1TaWduYWxiYXVfMTAxMDgxNDE3MjM4ODYzOTk5MTU=';
    this.dataService.getWebcamDetails(webcamId).then(details => this.webcamDetails = details);

    const lorryroadId = 'A1';
    this.dataService.getLorryParkings(roadId).then(parkings => this.lorryParkings = parkings.parking_lorry);

    const lorryId = 'UEFSS0lOR19fbWRtLmxvcnJ5LnBhcmtpbmdfX0RFLVNILTAwMTEwOA==';
    this.dataService.getLorryParkingDetails(lorryId).then(details => this.lorryParkingDetails = details);

    const trafficroadId = 'A1';
    this.dataService.getTrafficWarnings(roadId).then(warnings => this.trafficWarnings = warnings.warning);

    const warningId = 'V0FSTklOR19fbWRtLnZpel9fTE1TLU5XL3JfTE1TLU5XLzMyNDE3OV9EICBOVyBMTVMtTlcuMA==';
    this.dataService.getTrafficWarningDetails(warningId).then(details => this.trafficWarningDetails = details);

    const closuresroadId = 'A1';
    this.dataService.getClosures(roadId).then(closures => this.closures = closures.closure);

    const closureId = 'Q0xPU1VSRV9fbWRtLnZpel9fTE1TLU5XL3JfVElDLU5SV0JMSy8zOS9OUldCTEsvMTAgMzUgMjEgRCAwOTI0Mi0wMV9EICBOVyBMTVMtTlcuMA==';
    this.dataService.getClosureDetails(closureId).then(details => this.closureDetails = details);

    const serviceroadId = 'A1';
    this.dataService.getElectricChargingStations(roadId).then(stations => {
      this.electricChargingStations = stations.electric_charging_station;
    });

    const stationId = 'RUxFQ1RSSUNfQ0hBUkdJTkdfU1RBVElPTl9fMTczMzM=';
    this.dataService.getElectricChargingStationDetails(stationId).then(details => {
      this.electricChargingStationDetails = details;
    });
  }
}
