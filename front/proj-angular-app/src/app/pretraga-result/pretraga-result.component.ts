import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pretraga-result',
  templateUrl: './pretraga-result.component.html',
  styleUrls: ['./pretraga-result.component.css']
})
export class PretragaResultComponent implements OnInit {

  @Input() filterElementi;
  
  constructor() { }

  ngOnInit(): void {
  }

}
