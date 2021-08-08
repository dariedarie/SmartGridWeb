import { Component } from '@angular/core';
import { ElementService } from './services/ElementService';
import { IncidentService } from './services/IncidentService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proj-angular-app';

  constructor(){
  }
}
