import { Component, OnInit } from '@angular/core';
import { Incident } from '../entities/incident';
import { KorisnikService } from '../services/KorisnikService';
import { Router } from '@angular/router';
import { IncidentService } from '../services/IncidentService';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  i: Incident;

  constructor(public router: Router, public incidentService: IncidentService) { }

  ngOnInit(): void {
    alert("uloga: " + JSON.parse(localStorage["sessionTip"]));
  }

  incidents_click() : void {
    //this.i.dodeli_sebi_resavanje();
    //alert(' ' + KorisnikService.UlogovanKorisnik.username + 'aaa');
    if(JSON.parse(localStorage["sessionTip"]) === "Admin" ||
    JSON.parse(localStorage["sessionTip"]) === "Radnik" ||
    JSON.parse(localStorage["sessionTip"]) === "Dispecer"){
      this.incidentService.get().subscribe((r: any) =>{alert("Ucitani su incidenti iz baze");
                                                      this.incidentService.sviIncidenti = r;
                                                      this.router.navigate(['app/incidents']);});
    } else{
      alert("Nemate permisiju pristupa incidentima u sistemu" + "\n" + 
      "Vasa uloga: " + JSON.stringify(localStorage["sessionTip"]));
    }
  }

  documents_click() : void {
    //this.i.dodeli_sebi_resavanje();
    //alert(' ' + KorisnikService.UlogovanKorisnik.username + 'aaa');
    if(JSON.parse(localStorage["sessionTip"]) === "Admin" ||
    JSON.parse(localStorage["sessionTip"]) === "Radnik" ||
    JSON.parse(localStorage["sessionTip"]) === "Dispecer"){
      this.router.navigate(['app/documents']);
    }else{
      alert("Nemate permisiju pristupa incidentima u sistemu" + "\n" + 
      "Vasa uloga: " + JSON.stringify(localStorage["sessionTip"]));
    }
  }
}
