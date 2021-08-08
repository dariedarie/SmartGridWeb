import { Injectable } from '@angular/core';
import { Korisnik } from '../entities/korisnik';
import { Tim } from '../entities/tim';

@Injectable({
  providedIn: 'root'
})

export class TimService {
    
    public teams: Array<Tim>;
    constructor() {
        this.mock_teams();
    }

    public mock_teams(){
        const kor_t1 = new Array<string>();
        kor_t1.push("PeraD");
        kor_t1.push("Cen10");
        const t1 = new Tim(kor_t1, "TIM1");
        const kor_t2 = new Array<string>();
        kor_t2.push("Bond007");
        kor_t2.push("Cen10");
        const t2 = new Tim(kor_t2, "TIM2");

        this.teams.push(t1);
        this.teams.push(t2);
        
        
    }

    
}