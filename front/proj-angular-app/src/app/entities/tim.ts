import { Korisnik } from "./korisnik";

export class Tim{
    public clanovi :  Array<string>;
    public ime_tima: string;

    constructor(clanovi: Array<string>, ime_tima: string){
        this.clanovi = clanovi;
        this.ime_tima = ime_tima;
    }
}