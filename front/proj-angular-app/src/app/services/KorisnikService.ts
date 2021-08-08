import { Injectable } from '@angular/core';
import { Korisnik, TipKorisnika } from '../entities/korisnik';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})


export class KorisnikService {

    constructor() { }
    
    public static UlogovanKorisnik: Korisnik;

    loadUsers() {
      console.log('Učitavanje korisnika...');
      return this.mockedUsers();
    }
  
  
    mockedUsers(): Array<Korisnik> {
      let sviKorisnici = new Array<Korisnik>();
  
      const k1 = new Korisnik('Pera', 'Detlic', 'PeraD', 'Radnik', 'perad@gmail.com', 'perad');
      const k2 = new Korisnik('Bond', 'James', 'Bond007', 'Potrosac', 'bond007@gmail.com', '007');
      const k3 = new Korisnik('Dzeki', 'Cen', 'Cen10', 'Admin', 'ana99@gmail.com', 'cen10');
      const k4 = new Korisnik('Messi', 'Messi', 'Messi8', 'Dispecer', 'messi@gmail.com', 'messi8');

  
      sviKorisnici.push(k1);
      sviKorisnici.push(k2);
      sviKorisnici.push(k3);
      sviKorisnici.push(k4);
  
      return sviKorisnici;
    }

    public tryLogIn(username: string, password: string) : Boolean{
        for(let v of this.mockedUsers()){
            if(v.username === username){
                if(v.password === password)
                {
                    KorisnikService.UlogovanKorisnik = v;
                    return true;
                }
            }
            
        }
        return false;
    }

    public getRoleByUsername(username: string){
        for(const k of this.loadUsers()){
          if(k.username === username){
            return k.tip;
          }
        }
        return "";
    }
  
  }
  