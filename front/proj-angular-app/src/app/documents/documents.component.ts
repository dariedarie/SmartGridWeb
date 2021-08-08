import { Component, OnInit } from '@angular/core';
import { DocumentService } from '../services/DocumentService';
import { DocumentEnt } from '../entities/document';
import { Router } from '@angular/router';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {
  
  public allDocuments: Array<DocumentEnt>;
  public documentToChange : DocumentEnt;
  config: any;

  constructor(private service : DocumentService, public router: Router) {

    this.allDocuments = service.sviDokumenti;
    this.documentToChange = new DocumentEnt("", "", "", "", false, false, false, false);
    this.config = {
      itemsPerPage: 4,
      currentPage: 1,
      totalItems: this.allDocuments.length
    };
   }

  ngOnInit(): void {
  }

  noviDokument() : void{
    this.router.navigate(['app/new-document-basic-inf']);
    
  }
  
  pageChanged(event){
    this.config.currentPage = event;
  }

  sortiranje(){
    this.allDocuments = this.allDocuments.sort(
      (a, b) => (a.tip > b.tip)? 1:-1);
  }

  izmena(dokument: DocumentEnt){
    
    this.documentToChange = dokument;
    alert(JSON.stringify(dokument));
  }

  IzmeniDokument(){
    if(JSON.parse(localStorage["sessionTip"]) === "Admin" ||
    JSON.parse(localStorage["sessionTip"]) === "Dispecer"){
      alert(JSON.stringify(this.documentToChange));
      this.service.update(this.documentToChange).subscribe(r => ("Izmena izvrsena u bazi"));
    } else{
      alert("Samo administrator ima dozvolu izmene i brisanja elementa");
    }
  }
}
