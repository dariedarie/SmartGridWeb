import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KorisnikService } from '../services/KorisnikService';

@Component({
  selector: 'app-pocetna',
  templateUrl: './pocetna.component.html',
  styleUrls: ['./pocetna.component.css']
})
export class PocetnaComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  LoginModal(): void {
  }

  logIn(): void {
    var ks = new KorisnikService();
    let username = (<HTMLInputElement> document.getElementById("username")).value;
    let password = (<HTMLInputElement> document.getElementById("password")).value;
    if(ks.tryLogIn(username, password)){
      alert('Uspešno ste se prijavili');
      this.becomeAUser(username);
      this.router.navigate(['app/dashboard']);
      
      
      
    } else {
      alert('Neuspešna prijava ');
    }

    
  }

  becomeAUser(username): void {
    var ks = new KorisnikService();
    localStorage.setItem('sessionUserRole', JSON.stringify('USER'));
    localStorage.setItem('sessionUsername', JSON.stringify(username));
    localStorage.setItem('sessionTip', JSON.stringify(ks.getRoleByUsername(username)));
  }
}
