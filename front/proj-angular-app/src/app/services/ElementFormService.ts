import { Injectable } from '@angular/core';
import { Elemenat } from '../entities/elemenat';

@Injectable({
  providedIn: 'root'
})

export class ElemenatFormService{
    public el: Elemenat;
    
    constructor(){
        this.el = new Elemenat("", "", "", "");        
    }


}