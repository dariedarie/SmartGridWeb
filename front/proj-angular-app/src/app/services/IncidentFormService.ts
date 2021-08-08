import { Injectable } from '@angular/core';
import { Incident, TipIncidenta, StatusIncidenta } from '../entities/incident';
import { Resenje } from '../entities/resenje';
import { BasicInfo } from '../entities/basic-info';
import { Oprema } from '../entities/oprema';
import {Teams} from '../entities/teams';

@Injectable({
  providedIn: 'root'
})

export class IncidentFormService{
    public resenje: Resenje;
    public basic_info: BasicInfo;
    public oprema: Oprema;
    public teams : Teams;
    
    constructor(){
        this.resenje = new Resenje();
        this.basic_info = new BasicInfo();
        this.oprema = new Oprema();
        this.teams = new Teams();
    }


}