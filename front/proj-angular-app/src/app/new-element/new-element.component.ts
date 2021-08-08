import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Elemenat } from '../entities/elemenat';
import { ElemenatFormService } from '../services/ElementFormService';
import { ElementService } from '../services/ElementService';

@Component({
  selector: 'app-new-element',
  templateUrl: './new-element.component.html',
  styleUrls: ['./new-element.component.css']
})
export class NewElementComponent implements OnInit {

  public el: Elemenat;
  constructor(service: ElemenatFormService, 
    public el_service: ElementService,
    public router: Router) {
    this.el = service.el;
  }

  ngOnInit(): void {
  }

  DodajElement(){
    if(this.el.validacija()){
      alert(JSON.stringify(this.el));
      this.el_service.add(this.el).subscribe(
        r => alert("Upisan je element sa ID-jem: " + this.el.id));
        this.router.navigate(['app/elements']);
    }
  }
}
