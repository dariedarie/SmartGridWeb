import { Injectable } from '@angular/core';
import { Incident, TipIncidenta, StatusIncidenta } from '../entities/incident';
import { DocChecklist } from '../entities/doc-checklist';
import { DocBasicInfo } from '../entities/doc-basic-info';
import { Oprema } from '../entities/oprema';

@Injectable({
  providedIn: 'root'
})

export class DocumentFormService{
    public checklist: DocChecklist;
    public basic_info: DocBasicInfo;
    public oprema: Oprema;
    
    
    constructor(){
        this.checklist = new DocChecklist();
        this.basic_info = new DocBasicInfo();
    }


}