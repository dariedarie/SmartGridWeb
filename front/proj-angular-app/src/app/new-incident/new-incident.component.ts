import { Component, OnInit } from '@angular/core';
import { NewIncidentBasicInfComponent } from '../new-incident-basic-inf/new-incident-basic-inf.component';

@Component({
  selector: 'app-new-incident',
  templateUrl: './new-incident.component.html',
  styleUrls: ['./new-incident.component.css']
})
export class NewIncidentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  loadBasic(){}
}
