import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KorisnikService } from '../services/KorisnikService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
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

  becomeAUser(username: string): void {
    var ks = new KorisnikService();
    localStorage.setItem('sessionUserRole', JSON.stringify('USER'));
    localStorage.setItem('sessionUsername', JSON.stringify(username));
    localStorage.setItem('sessionTip', JSON.stringify(ks.getRoleByUsername(username)));
  }

}
