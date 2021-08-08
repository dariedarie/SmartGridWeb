import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DocumentService } from '../services/DocumentService';
import { ElementService } from '../services/ElementService';
import { IncidentService } from '../services/IncidentService';
@Component({
  selector: 'app-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.css']
})
export class AppLayoutComponent implements OnInit {

  constructor(public router: Router, public incService: IncidentService,
    public elService: ElementService, public docService: DocumentService) { 

      
    }

  ngOnInit(): void {
  }
  home_click(){
    this.incService.get().subscribe((res:any) => this.incService.sviIncidenti = res);
    this.elService.get().subscribe((res:any) => this.elService.sviElementi = res);
    this.docService.get().subscribe((res:any) => this.docService.sviDokumenti = res);
    this.router.navigate(['app/dashboard']);
    
  }

  pretraga_click(){
    this.elService.get().subscribe((res:any) => this.elService.sviElementi = res);
    this.router.navigate(['app/pretraga']);
  }

  elements_click(){
    this.elService.get().subscribe((res:any) => {this.elService.sviElementi = res; this.router.navigate(['app/elements'])});
  }

  logout_click(){
    this.revertRole();
    this.router.navigate(['/']);
  }

  revertRole(): void {
    localStorage.removeItem('sessionUserRole');
    localStorage.removeItem('sessionUsername');
    localStorage.removeItem('sessionTip');
  }

  map_click(){
    this.router.navigate(['app/map']);
  }

  dash_click(){
    this.incService.get().subscribe((res:any) => this.incService.sviIncidenti = res);
    this.elService.get().subscribe((res:any) => this.elService.sviElementi = res);
    this.docService.get().subscribe((res:any) => this.docService.sviDokumenti = res);
    this.router.navigate(['app/dashboard']);
    
  }

  docs_click() : void {
    //this.i.dodeli_sebi_resavanje();
    //alert(' ' + KorisnikService.UlogovanKorisnik.username + 'aaa');
    if(JSON.parse(localStorage["sessionTip"]) === "Admin" ||
    JSON.parse(localStorage["sessionTip"]) === "Radnik" ||
    JSON.parse(localStorage["sessionTip"]) === "Dispecer"){
      this.router.navigate(['app/documents']);
    }else{
      alert("Nemate permisiju pristupa incidentima u sistemu" + "\n" + 
      "Vasa uloga: " + JSON.stringify(localStorage["sessionTip"]));
    }
  }

  incidents_click() : void {
    //this.i.dodeli_sebi_resavanje();
    //alert(' ' + KorisnikService.UlogovanKorisnik.username + 'aaa');
    if(JSON.parse(localStorage["sessionTip"]) === "Admin" ||
    JSON.parse(localStorage["sessionTip"]) === "Radnik" ||
    JSON.parse(localStorage["sessionTip"]) === "Dispecer"){
      this.incService.get().subscribe((r: any) =>{alert("Ucitani su incidenti iz baze");
                                                      this.incService.sviIncidenti = r;
                                                      this.router.navigate(['app/incidents']);});
                                                      
    } else{
      alert("Nemate permisiju pristupa incidentima u sistemu" + "\n" + 
      "Vasa uloga: " + JSON.stringify(localStorage["sessionTip"]));
    }
  }

  
}
