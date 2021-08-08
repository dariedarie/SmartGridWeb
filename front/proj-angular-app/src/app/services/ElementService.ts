import { Injectable } from '@angular/core';
import { elementAt } from 'rxjs/operators';
import { Elemenat } from '../entities/elemenat';
import { SearchParam } from '../entities/search-param';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
@Injectable({
  providedIn: 'root'
})

export class ElementService {

    constructor(private httpClient: HttpClient) {
      this.get().subscribe((res:any) => this.sviElementi = res);
        this.headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
     }
    
    //private headers: HttpHeaders;
    public sviElementi: Array<Elemenat>
    private headers: HttpHeaders;
    //private http: HttpClient;
    private accessPointUrl: string = 'http://localhost:51654/api/elements';

    loadElements() {
      console.log('Učitavanje elemenata...');
      this.get().subscribe((res:any) => {return res;});
    }
  
  
    mockedElements(): Array<Elemenat> {
      let sviElementi = new Array<Elemenat>();
  
      //const k1 = new Elemenat("E1", 'Prekidac', 'Prekidac1', 'adresa');
      //const k2 = new Elemenat("E2", 'Transformator', 'Transformator1', 'adresa2');
      
  
      //sviElementi.push(k1);
      //sviElementi.push(k2);
      //this.add(k2).subscribe(record => alert('UPISANO U BAZU'));
      //this.remove(k1).subscribe(record => alert('OBRISANO'));

      //alert('UCITAO SAM');
  
      return sviElementi;
    }

    searchElements(sviElementi: Elemenat[], searchParams: SearchParam[]): Elemenat[] {
      let filteredEl = new Array<Elemenat>();
      for (const el of sviElementi) {
        let addEl = true;
        for (const searchParam of searchParams) {
          if (this.checkIDFilter(el, searchParam)) {
              addEl = false;
              console.log(el.id + ' ' + el.naziv + ' ne zadovoljava vrednost polja idElementa');
              break;
          }
  
          if (this.checkNameFilter(el, searchParam)) {
            addEl = false;
            console.log(el.id + ' ' + el.naziv + ' ne zadovoljava vrednost polja nazivElementa');
            break;
          }

          if (this.checkTipFilter(el, searchParam)) {
            addEl = false;
            console.log(el.id + ' ' + el.naziv + ' ne zadovoljava vrednost polja tipElementa');
            break;
          }
        }
  
        if (addEl)
          filteredEl.push(el);
      }
  
      return filteredEl;
    }

    checkIDFilter(elemenat: Elemenat, searchParam: SearchParam): boolean {
      return searchParam instanceof SearchParam && searchParam.name === 'idElementa' && !elemenat.id.toLowerCase().includes(searchParam.value.toLowerCase());
    }

    checkNameFilter(elemenat: Elemenat, searchParam: SearchParam): boolean {
      return searchParam instanceof SearchParam && searchParam.name === 'nazivElementa' && !elemenat.naziv.toLowerCase().includes(searchParam.value.toLowerCase());
    }

    checkTipFilter(elemenat: Elemenat, searchParam: SearchParam): boolean {
      return searchParam instanceof SearchParam && searchParam.name === 'tipElementa' && !elemenat.tip.toLowerCase().includes(searchParam.value.toLowerCase());
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