import { Injectable } from '@angular/core';
import { Incident, TipIncidenta, StatusIncidenta } from '../entities/incident';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Elemenat } from '../entities/elemenat';
@Injectable({
  providedIn: 'root'
})

export class IncidentService {

    constructor(private httpClient: HttpClient) {
        //this.sviIncidenti = this.loadIncidents();
        this.headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
        this.get().subscribe((res:any) => {this.sviIncidenti = res;})
        //this.sviIncidenti = this.loadIncidents();
     }
     private headers: HttpHeaders;
     //private http: HttpClient;
     private accessPointUrl: string = 'http://localhost:51654/api/incidents';
    
    public sviIncidenti: Array<Incident>

    loadIncidents() {
      console.log('Učitavanje incidenata...');
      return this.mockedIncidents();
    }
  
  
    mockedIncidents(): Array<Incident> {
      let sviIncidenti = new Array<Incident>();
  
      const k1 = new Incident("I1", "Incident1", 1, "Planiran", "Submited",
      "Opis", false, new Date(), new Date(), new Date(), new Date(),
      "Bulevar oslobodjenja 10", 100, 2, 11, "Vetar", "Uragan", "Podzemna",
      "Metal");
      this.add(k1).subscribe(k => alert("Dodao sam incident sa id: " + k1.id));
      const k2 = new Incident("I2", "Incident2", 1, "Neplaniran", "Drawt",
      "Opis", false, new Date(), new Date(), new Date(), new Date(),
      "Bulevar oslobodjenja 11", 21, 1, 11, "Vetar", "Uragan", "Podzemna",
      "Metal");
      this.add(k2).subscribe(k => alert("Dodao sam incident sa id: " + k2.id));
      
  
      sviIncidenti.push(k1);
      sviIncidenti.push(k2);

      //alert('UCITAO SAM');
  
      return sviIncidenti;
    }

    getUser(): string{
      return JSON.parse(localStorage.getItem('sessionUsername'));
    }

    getIncidentsForUser(username : string): Array<Incident>{
      const list = new Array<Incident>();
      for(const inc of this.sviIncidenti){
        if(inc.korisnik === username){
          list.push(inc);
        }
      }
      return list;
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
      alert("Brisem");
      return this.httpClient.delete(this.accessPointUrl + '/' + element.id, {headers: this.headers});
    }
  
    public update(element) {
      return this.httpClient.put(this.accessPointUrl + '/' + element.id, element, {headers: this.headers});
    }
}