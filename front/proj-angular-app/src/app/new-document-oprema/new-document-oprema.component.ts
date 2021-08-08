import { Component, OnInit } from '@angular/core';
import { ElementService } from '../services/ElementService';
import { Elemenat } from '../entities/elemenat';
import { Router } from '@angular/router';
import { DocumentFormService } from '../services/DocumentFormService';
import { DocumentService } from '../services/DocumentService';
import { DocumentEnt } from '../entities/document';

@Component({
  selector: 'app-new-document-oprema',
  templateUrl: './new-document-oprema.component.html',
  styleUrls: ['./new-document-oprema.component.css']
})
export class NewDocumentOpremaComponent implements OnInit {
  public doc: Document;
  public pickedElements: Array<Elemenat>;
  public allElements: Array<Elemenat>;
  config: any;
  configModal: any;
  constructor(public elementService: ElementService, 
    private documentFormService: DocumentFormService,
    public documentservice: DocumentService,
    public router: Router) { 
    
    this.pickedElements = new Array<Elemenat>();
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

      
      const doc = new DocumentEnt(this.documentFormService.basic_info.id, this.documentFormService.basic_info.ime,
      this.documentFormService.basic_info.tip, this.documentFormService.basic_info.plan_rada,
      this.documentFormService.checklist.allOpsCompleted, this.documentFormService.checklist.allTagsRemoved,
      this.documentFormService.checklist.groundingRemoved, this.documentFormService.checklist.readyForService);
      if(doc.validate()){
        alert(JSON.stringify(doc));
        this.documentservice.add(doc).subscribe((res: any) => alert("UPISAN NOVI DOKUMENT"));
      }
  }

  dodajElement(id: string){
    //this.pickedElements.push(element);
    alert("Uspešno dodavanje opreme" + "   " + id);
    //elm: Elemenat;
    for (const el of this.allElements){
      if(id === el.id){
        this.pickedElements.push(el);
        this.documentFormService.oprema.elementi.push(el);
      }
    }
  }
}
