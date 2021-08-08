import { KorisnikService } from '../services/KorisnikService';
import { Elemenat } from './elemenat';

export enum TipIncidenta {
    Planiran = 'Planiran',
    Neplaniran = 'Neplaniran',
}

export enum StatusIncidenta {
    Planiran = 'Planiran',
    Neplaniran = 'Neplaniran',
}

export class Incident{
    id: string;
    name: string
    priority: number;
    tip: string;
    status: string;
    description: string;
    confirmed: boolean;
    ata: Date;
    eta: Date;
    outage_time: Date;
    etr: Date;   
    adresa: string;
    afektovani_potrosaci: number;
    calls: number;
    nivo_napona: number;
    korisnik: string;
    //oprema: Array<Elemenat>;

    uzrok: string;
    poduzrok: string;
    tip_konstrukcije: string;
    materijal: string;

    constructor(id: string,
        name: string,
        priority: number,
        tip: string,
        status: string,
        description: string,
        confirmed: boolean,
        ata: Date,
        eta: Date,
        outage_time: Date,
        etr: Date,
        adresa: string,
        afektovani_potrosaci: number,
        calls: number,
        nivo_napona: number,
        uzrok: string,
        poduzrok: string,
        tip_konstrukcije: string,
        materijal: string
        ){
        this.id = id;
        this.name = name;
        this.priority = priority;
        this.tip = tip;
        this.status = status;
        this.description = description;
        this.confirmed = confirmed;
        this.ata = new Date();
        this.eta = new Date();
        this.outage_time = new Date();
        
        this.etr = new Date();
        
        this.adresa = adresa;
        this.afektovani_potrosaci = afektovani_potrosaci;
        this.calls = calls;
        this.nivo_napona = nivo_napona;
        this.korisnik = JSON.parse(localStorage.getItem('sessionUsername'));;
        this.uzrok = uzrok;
        this.poduzrok = poduzrok;
        this.tip_konstrukcije = tip_konstrukcije;
        this.materijal = materijal;

        
        //this.oprema = oprema;
    }

    public dodeli_sebi_resavanje() {
        alert(' ' + JSON.parse(localStorage.getItem('sessionUsername')) + ' aaa');
    }

    validacija(){
        const sveOk = true;
        if(!this.id){
            alert("Niste popunili polje ID");
            return false;
        }

        if(!this.calls){
            alert("Niste popunili polje Pozivi");
            return false;
        }

        if(!this.name){
            alert("Niste popunili polje Naziv");
            return false;
        }

        if(!this.priority){
            alert("Niste popunili polje Priorited");
            return false;
        }

        if(!this.eta){
            alert("Niste popunili polje ETA");
            return false;
        }

        if(!this.ata){
            alert("Niste popunili polje ATA");
            return false;
        }

        if(!this.etr){
            alert("Niste popunili polje ETR");
            return false;
        }

        if(!this.outage_time){
            alert("Niste popunili polje Vreme iskljucenja");
            return false;
        }

        if(!this.afektovani_potrosaci){
            alert("Niste popunili polje Afektovani potrosaci");
            return false;
        }

        if(!this.uzrok){
            alert("Niste popunili polje Uzrok");
            return false;
        }

        if(!this.poduzrok){
            alert("Niste popunili polje Poduzrok");
            return false;
        }

        if(!this.materijal){
            alert("Niste popunili polje Materijal");
            return false;
        }

        if(!this.tip_konstrukcije){
            alert("Niste popunili polje Tip konstrukcije");
            return false;
        }

        return sveOk;
    }
}