import { Component, OnInit } from '@angular/core';
import { BasicInfo } from '../entities/basic-info';
import { IncidentFormService } from '../services/IncidentFormService';

@Component({
  selector: 'app-new-incident-basic-inf',
  templateUrl: './new-incident-basic-inf.component.html',
  styleUrls: ['./new-incident-basic-inf.component.css']
})
export class NewIncidentBasicInfComponent implements OnInit {

  basic_inf: BasicInfo;
  constructor(service: IncidentFormService) {
    this.basic_inf = service.basic_info;
  }

  ngOnInit(): void {
  }

}
