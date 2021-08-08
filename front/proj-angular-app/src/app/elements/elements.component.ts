import { Component, OnInit } from '@angular/core';
import { ElementService } from '../services/ElementService';
import { Elemenat } from '../entities/elemenat';
import { Router } from '@angular/router';

@Component({
  selector: 'app-elements',
  templateUrl: './elements.component.html',
  styleUrls: ['./elements.component.css']
})
export class ElementsComponent implements OnInit {

  public allElements: Array<Elemenat>;
  public elementToChange: Elemenat;
  config: any;

  constructor(public service : ElementService, public router: Router) {

    this.allElements = service.sviElementi;
    this.elementToChange = new Elemenat("","","","");

    this.config = {
      itemsPerPage: 4,
      currentPage: 1,
      totalItems: this.allElements.length
    };
   }

  ngOnInit(): void {
  }

  noviElement() : void{
    this.router.navigate(['app/new-element']);
    //alert('kliknuto');
  }
  
  pageChanged(event){
    this.config.currentPage = event;
  }

  sortiranje(){
    this.allElements = this.allElements.sort(
      (a, b) => (a.tip > b.tip)? 1:-1);
  }

  izmena(elemenat: Elemenat){
    
    this.elementToChange = elemenat;
    alert(JSON.stringify(elemenat));
  }

  IzmeniElement(){
    if(JSON.parse(localStorage["sessionTip"]) === "Admin"){
      alert(JSON.stringify(this.elementToChange));
      this.service.update(this.elementToChange).subscribe(r => ("Izmena izvrsena u bazi"));
    } else{
      alert("Samo administrator ima dozvolu izmene i brisanja elementa");
    }
  }

}
