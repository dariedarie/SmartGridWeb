import { Injectable } from '@angular/core';
import { DocumentEnt } from '../entities/document';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})

export class DocumentService {

    constructor(private httpClient: HttpClient) {
      this.get().subscribe((res:any) => this.sviDokumenti = res);
      this.headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
     }
    
     private headers: HttpHeaders;
     //private http: HttpClient;
     private accessPointUrl: string = 'http://localhost:51654/api/documents';
    public sviDokumenti: Array<DocumentEnt>

    loadDocuments() {
      console.log('Učitavanje dokumenata...');
      return this.mockedDocuments();
    }
  
  
    mockedDocuments(): Array<DocumentEnt> {
      let sviDokumenti = new Array<DocumentEnt>();
  
      const k1 = new DocumentEnt("D1", "doc1", 'planiran', 'PR1', false, false, false, false);
      this.add(k1).subscribe(r => alert("Dodao sam"));
      const k2 = new DocumentEnt("D2", "doc2", 'planiran', 'PR2', false, false, false, false);
      this.add(k2).subscribe(r => alert("Dodao sam"));
      const k3 = new DocumentEnt("D3", "doc3", 'planiran', 'PR3', false, false, false, false);
      this.add(k3).subscribe(r => alert("Dodao sam"));
      const k4 = new DocumentEnt("D4", "doc4", 'planiran', 'PR4', false, false, false, false);
      this.add(k4).subscribe(r => alert("Dodao sam"));
      const k5 = new DocumentEnt("D5", "doc5", 'planiran', 'PR5', false, false, false, false);
      this.add(k5).subscribe(r => alert("Dodao sam"));
  
      sviDokumenti.push(k1);
      sviDokumenti.push(k2);
      sviDokumenti.push(k3);
      sviDokumenti.push(k4);
      sviDokumenti.push(k5);

      //alert('UCITAO SAM');
  
      return sviDokumenti;
    }

    // backend
    public get() {
      return this.httpClient.get(this.accessPointUrl, {headers: this.headers});
    }
  
    public add(element) {
      alert("Upisujem...");
      return this.httpClient.post(this.accessPointUrl, element, {headers: this.headers});
    }
  
    public remove(element) {
      alert('Brisem...Id: ' + element.id);
      return this.httpClient.delete(this.accessPointUrl + '/' + element.id, {headers: this.headers});
    }
  
    public update(element) {
      return this.httpClient.put(this.accessPointUrl + '/' + element.id, element, {headers: this.headers});
    }
}