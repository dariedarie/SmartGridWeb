import { Component, OnInit } from '@angular/core';
import { Resenje } from '../entities/resenje';
import { IncidentFormService } from '../services/IncidentFormService';

@Component({
  selector: 'app-new-incident-resenje',
  templateUrl: './new-incident-resenje.component.html',
  styleUrls: ['./new-incident-resenje.component.css']
})
export class NewIncidentResenjeComponent implements OnInit {

  resenje: Resenje;
  constructor(public service: IncidentFormService) {
    this.resenje = service.resenje;
  }

  ngOnInit(): void {
  }

  
}
