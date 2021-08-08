import { Component, OnInit } from '@angular/core';
import { IncidentService } from '../services/IncidentService';
import { Incident, TipIncidenta } from '../entities/incident';
import { Router } from '@angular/router';

@Component({
  selector: 'app-incidents',
  templateUrl: './incidents.component.html',
  styleUrls: ['./incidents.component.css']
})
export class IncidentsComponent implements OnInit {
  
  public allIncidents: Array<Incident>;
  public myIncidents: Array<Incident>;
  public myIncidentsChecked: boolean;
  config: any;
  config2: any;

  constructor(private service : IncidentService, public router: Router) {
    
    this.allIncidents = service.sviIncidenti;
    let username = service.getUser();
    this.myIncidents = service.getIncidentsForUser(username);
    this.myIncidentsChecked = false;

    this.config = {
      itemsPerPage: 4,
      currentPage: 1,
      totalItems: this.allIncidents.length
    };

    this.config2 = {
      itemsPerPage: 4,
      currentPage: 1,
      totalItems: this.myIncidents.length
    };
   }

  ngOnInit(): void {
  }

  noviIncident() : void{
    this.router.navigate(['app/new-incident-basic-inf']);
    alert('kliknuto');
  }
  
  pageChanged(event){
    this.config.currentPage = event;
  }
  pageChanged2(event){
    this.config2.currentPage = event;
  }

  myIncidentsClick(){
    this.myIncidentsChecked = true;
  }

  sortiranje(){
    this.allIncidents = this.allIncidents.sort(
      (a, b) => (a.tip > b.tip)? 1:-1);
  }

  brisanje(inc : Incident){
    if(JSON.parse(localStorage["sessionTip"]) === "Admin" ||
    JSON.parse(localStorage["sessionTip"]) === "Dispecer"){
      this.service.remove(inc).subscribe(r => alert("Obrisan element"));
    } else{
      alert("Nemate permisiju brisanja");
    }
  }
}
