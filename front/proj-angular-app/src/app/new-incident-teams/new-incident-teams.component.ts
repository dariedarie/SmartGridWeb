import { Component, OnInit } from '@angular/core';
import { Tim } from '../entities/tim';
import { IncidentService } from '../services/IncidentService';
import { TimService } from '../services/TimService';
import { IncidentFormService } from '../services/IncidentFormService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-incident-teams',
  templateUrl: './new-incident-teams.component.html',
  styleUrls: ['./new-incident-teams.component.css']
})
export class NewIncidentTeamsComponent implements OnInit {
  
  public pickedTeams: Array<Tim>;
  public allTeams: Array<Tim>;
  config: any;
  configModal: any;


  constructor( 
    private incidentFormService: IncidentFormService,
    public incidentService: IncidentService,
    public router: Router) { 
    this.pickedTeams = new Array<Tim>();
    this.allTeams = this.mock_teams();
    //alert(this.allElements.length);
    this.config = {
      itemsPerPage: 4,
      currentPage: 1,
      totalItems: 2};
    this.configModal = {
      itemsPerPage: 4,
      currentPage: 1,
      totalItems: 2
    };
  }

  ngOnInit(): void {
    
  }
  pageChanged(event){
    this.config.currentPage = event;
  }

  pageChanged2(event){
    this.configModal.currentPage = event;
  }

  dodajTimove(){
    
  }

  
  dodajTim(ime: string){
    //this.pickedElements.push(element);
    alert("Uspešno dodavanje opreme" + "   " + ime);
    //elm: Elemenat;
    for (const el of this.allTeams){
      if(ime === el.ime_tima){
        this.pickedTeams.push(el);
        //this.elementService.sviElementi.push(el);
      }
    }
  }

  public mock_teams(){
    
    var timovi = new Array<Tim>();
    var kor_t1 = new Array<string>();
    kor_t1.push("PeraD");
    kor_t1.push("Cen10");
    var t1 = new Tim(kor_t1, "TIM1");
    var kor_t2 = new Array<string>();
    kor_t2.push("Bond007");
    kor_t2.push("Cen10");
    var t2 = new Tim(kor_t2, "TIM2");
    timovi.push(t1);
    timovi.push(t2);
    
    return timovi;
    
}

}
