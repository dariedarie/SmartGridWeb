import { NumberFormatStyle } from "@angular/common";

export class Elemenat{
    id: string;
    
    naziv: string;

    tip: string;
    
    adresa: string;
    

    constructor(id: string,
        tip: string,
        naziv: string,
        adresa: string){
        this.id = id;
        this.tip = tip;
        this.naziv = naziv;
        this.adresa = adresa;
    }

    validacija(){
        const sveOk = true;
        if(this.naziv === ""){
            alert("Niste popunili ime");
            return false;
        }

        if(this.id === ""){
            alert("Niste popunili ID");
            return false;
        }

        if(this.tip === ""){
            alert("Niste popunili tip");
            return false;
        }

        if(this.adresa === ""){
            alert("Niste popunili adresu");
            return false;
        }


        return sveOk;
    }
}