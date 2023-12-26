import { Component, OnInit, Input } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { DataService } from '../../data.service';
import { Roadwork } from '../../types';

@Component({
  selector: 'roadworks',
  templateUrl: './roadworks.component.html',
})
export class RoadworksComponent implements OnInit {
  @Input() id!: string;
  roadworks: Roadwork[] = [];
  error: string | undefined;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    firstValueFrom(this.dataService.getRoadWorks(this.id)).then(res => {
      this.roadworks = res.roadworks;

        // const roadworkId = this.roadworks[0].identifier;
        // const webcamId = 'V0VCQ0FNX19OUldfU2lsYS1TaWduYWxiYXVfMTAxMDgxMDk4ODE2NDgyOTQ4NTQ=';
        // const lorryId = 'UEFSS0lOR19fbWRtLmxvcnJ5LnBhcmtpbmdfX0RFLVNILTAwMTEwOA==';
        // const warningId = 'V0FSTklOR19fbWRtLnZpel9fTE1TLU5XL3JfTE1TLU5XLzMyNDE3OV9EICBOVyBMTVMtTlcuMA==';
        // const closureId = 'Q0xPU1VSRV9fbWRtLnZpel9fTE1TLU5XL3JfTE1TLU5XLzMxNTEyMV9EICBOVyBMTVMtTlcuMA==';
        // const stationId = 'RUxFQ1RSSUNfQ0hBUkdJTkdfU1RBVElPTl9fMTI2OTk=';

        // Promise.all([
        //   this.dataService.getRoadWorkDetails(roadworkId),
        //   this.dataService.getWebcamDetails(webcamId),
        //   this.dataService.getLorryParkingDetails(lorryId),
        //   this.dataService.getTrafficWarningDetails(warningId),
        //   this.dataService.getClosureDetails(closureId),
        //   this.dataService.getElectricChargingStationDetails(stationId)
        // ]).then(([roadWorkDetails, webcamDetails, lorryParkingDetails, trafficWarningDetails, closureDetails, electricChargingStationDetails]) => {
        //   console.log('hola');
        //   this.roadWorkDetails = roadWorkDetails;
        //   this.webcamDetails = webcamDetails;
        //   this.lorryParkingDetails = lorryParkingDetails;
        //   this.trafficWarningDetails = trafficWarningDetails;
        //   this.closureDetails = closureDetails;
        //   this.electricChargingStationDetails = electricChargingStationDetails;
        // }).catch(error => {
        //   console.error('Error fetching item details:', error);
        // });

        // // Obtener estaciones de carga y detalles específicos de una estación
        // this.dataService.getElectricChargingStations(roadId).then(stations => {
        //   this.electricChargingStations = stations;

        //   const stationId = 'RUxFQ1RSSUNfQ0hBUkdJTkdfU1RBVElPTl9fMTI2OTk=';

        //   this.dataService.getElectricChargingStationDetails(stationId).then(stationDetails => {
        //     this.electricChargingStationDetails = stationDetails;
        //   }).catch(error => {
        //     console.error('Error fetching station details:', error);
        //   });
        // }).catch(error => {
        //   console.error('Error fetching charging stations:', error);
        // });
    }).catch(error => {
      this.error = "Error fetching roadworks"
    });
  }
}
