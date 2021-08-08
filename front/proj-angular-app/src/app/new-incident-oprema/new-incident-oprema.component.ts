import { Component, OnInit } from '@angular/core';
import { IncidentFormService } from '../services/IncidentFormService';
import { ElementService } from '../services/ElementService';
import { Incident } from '../entities/incident';
import { Elemenat } from '../entities/elemenat';
import { IncidentService } from '../services/IncidentService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-incident-oprema',
  templateUrl: './new-incident-oprema.component.html',
  styleUrls: ['./new-incident-oprema.component.css']
})
export class NewIncidentOpremaComponent implements OnInit {
  public inc: Incident;
  public pickedElements: Array<Elemenat>;
  public allElements: Array<Elemenat>;
  config: any;
  configModal: any;
  constructor(public elementService: ElementService, 
    private incidentFormService: IncidentFormService,
    public incidentService: IncidentService,
    public router: Router) { 
    
    this.pickedElements = incidentFormService.oprema.elementi;
    this.allElements = elementService.sviElementi;
    //alert(this.allElements.length);
    this.config = {
      itemsPerPage: 4,
      currentPage: 1,
      totalItems: this.allElements.length
    };
    this.configModal = {
      itemsPerPage: 4,
      currentPage: 1,
      totalItems: this.allElements.length
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

  dodajOpremu(){
    
  }

  submit(){

    this.inc = new Incident(this.incidentFormService.basic_info.id,
      this.incidentFormService.basic_info.name, 
      this.incidentFormService.basic_info.priority,
      this.incidentFormService.basic_info.tip,
      "Draft",
      this.incidentFormService.basic_info.description,
      this.incidentFormService.basic_info.confirmed,
      this.incidentFormService.basic_info.ata,
      this.incidentFormService.basic_info.eta,
      this.incidentFormService.basic_info.outage_time,
      this.incidentFormService.basic_info.etr,
      this.incidentFormService.basic_info.adresa,
      this.incidentFormService.basic_info.affected_customers,
      this.incidentFormService.basic_info.calls,
      this.incidentFormService.basic_info.voltage,
      this.incidentFormService.resenje.uzrok,
      this.incidentFormService.resenje.poduzrok,
      this.incidentFormService.resenje.tip_konstrukcije,
      this.incidentFormService.resenje.materijal,
      );

      if(this.inc.validacija()){
        alert(JSON.stringify(this.inc));
        this.incidentService.add(this.inc).subscribe(r => alert("Upisan je element sa ID-jem: " + this.inc.id));
        this.router.navigate(['app/incidents']);
      } else{
        alert("Neuspesna validacija");
      }
  }

  dodajElement(id: string){
    //this.pickedElements.push(element);
    alert("Uspešno dodavanje opreme" + "   " + id);
    //elm: Elemenat;
    for (const el of this.allElements){
      if(id === el.id){
        this.pickedElements.push(el);
        //this.elementService.sviElementi.push(el);
      }
    }
  }
}
