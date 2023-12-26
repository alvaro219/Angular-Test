import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { ElectricChargingStation, ElectricChargingStationResponse } from './types';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  autobahnen: string[] = [];
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
  electricChargingStations: ElectricChargingStation[] = [];
  electricChargingStationDetails: any[] = [];
  station: any;

  title = 'Angular_Test';

  constructor(private dataService: DataService) { }

  ngOnInit() {
    firstValueFrom(this.dataService.getAutobahnen()).then(res => {
      this.autobahnen = res.roads;
    });
    // this.dataService.getAutobahnen().then(roads => {
    //   this.autobahnen = roads;
    //   if (this.autobahnen.length > 0) {
    //     const roadId = this.autobahnen[0];

    //     this.dataService.getRoadWorks(roadId).then(works => {
    //       this.roadworks = works.roadworks;

    //       /* this.dataService.getElectricChargingStationDetails(stationId).then(stationDetails => {
    //         this.electricChargingStationDetails = stationDetails; */

    //       const roadworkId = works.roadworks[0].identifier;
    //       const webcamId = 'V0VCQ0FNX19OUldfU2lsYS1TaWduYWxiYXVfMTAxMDgxMDk4ODE2NDgyOTQ4NTQ=';
    //       const lorryId = 'UEFSS0lOR19fbWRtLmxvcnJ5LnBhcmtpbmdfX0RFLVNILTAwMTEwOA==';
    //       const warningId = 'V0FSTklOR19fbWRtLnZpel9fTE1TLU5XL3JfTE1TLU5XLzMyNDE3OV9EICBOVyBMTVMtTlcuMA==';
    //       const closureId = 'Q0xPU1VSRV9fbWRtLnZpel9fTE1TLU5XL3JfTE1TLU5XLzMxNTEyMV9EICBOVyBMTVMtTlcuMA==';
    //       const stationId = 'RUxFQ1RSSUNfQ0hBUkdJTkdfU1RBVElPTl9fMTI2OTk=';

    //       Promise.all([
    //         this.dataService.getRoadWorkDetails(roadworkId),
    //         this.dataService.getWebcamDetails(webcamId),
    //         this.dataService.getLorryParkingDetails(lorryId),
    //         this.dataService.getTrafficWarningDetails(warningId),
    //         this.dataService.getClosureDetails(closureId),
    //         this.dataService.getElectricChargingStationDetails(stationId)
    //       ]).then(([roadWorkDetails, webcamDetails, lorryParkingDetails, trafficWarningDetails, closureDetails, electricChargingStationDetails]) => {
    //         console.log('hola');
    //         this.roadWorkDetails = roadWorkDetails;
    //         this.webcamDetails = webcamDetails;
    //         this.lorryParkingDetails = lorryParkingDetails;
    //         this.trafficWarningDetails = trafficWarningDetails;
    //         this.closureDetails = closureDetails;
    //         this.electricChargingStationDetails = electricChargingStationDetails;
    //       }).catch(error => {
    //         console.error('Error fetching item details:', error);
    //       });

    //       // Obtener estaciones de carga y detalles específicos de una estación
    //       this.dataService.getElectricChargingStations(roadId).then(stations => {
    //         this.electricChargingStations = stations;

    //         const stationId = 'RUxFQ1RSSUNfQ0hBUkdJTkdfU1RBVElPTl9fMTI2OTk=';

    //         this.dataService.getElectricChargingStationDetails(stationId).then(stationDetails => {
    //           this.electricChargingStationDetails = stationDetails;
    //         }).catch(error => {
    //           console.error('Error fetching station details:', error);
    //         });
    //       }).catch(error => {
    //         console.error('Error fetching charging stations:', error);
    //       });
    //     });
    //   }
    // });
  }
}
