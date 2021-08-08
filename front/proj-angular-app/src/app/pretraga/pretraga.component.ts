import { Component, OnInit } from '@angular/core';
import { Elemenat } from '../entities/elemenat';
import { SearchParam } from '../entities/search-param';
import { ElementService } from '../services/ElementService';

@Component({
  selector: 'app-pretraga',
  templateUrl: './pretraga.component.html',
  styleUrls: ['./pretraga.component.css']
})
export class PretragaComponent implements OnInit {

  public sviElementi: Array<Elemenat>;
  public filterElementi: Array<Elemenat>;

  constructor(public service: ElementService) {
    this.sviElementi = this.service.sviElementi;
    this.filterElementi = new Array<Elemenat>();
  }

  pretrazi(){
    this.obrisi_rezultate();
    let searchParams = new Array<SearchParam>();
    if (this.getFilterFieldValue("idElementa")) {
      searchParams.push(this.addIdSearchParam());
    }
    if (this.getFilterFieldValue("nazivElementa")) {
      searchParams.push(this.addNameSearchParam());
    }
    if (this.getFilterFieldValue("tipElementa")) {
      searchParams.push(this.addTipSearchParam());
    }
    alert("Pretraga");
    this.filterElementi = this.service.searchElements(this.sviElementi, searchParams);
  }

  obrisi_rezultate(){
    this.filterElementi = new Array<Elemenat>();
  }


  ngOnInit(): void {
  }

  getFilterFieldValue(filterFieldId: string) {
    return (<HTMLInputElement> document.getElementById(filterFieldId)).value;
  }

  addIdSearchParam(): ReturnType<any> {
    return new SearchParam("idElementa", this.getFilterFieldValue("idElementa"));
  }

  addNameSearchParam(): ReturnType<any> {
    return new SearchParam("nazivElementa", this.getFilterFieldValue("nazivElementa"));
  }

  addTipSearchParam(): ReturnType<any> {
    return new SearchParam("tipElementa", this.getFilterFieldValue("tipElementa"));
  }

}
