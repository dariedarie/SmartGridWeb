import { StringifyOptions } from "querystring";
import { Incident } from '../entities/incident';

export enum TipKorisnika {
    ClanEkipe = 'ClanEkipe',
    Dispecer = 'Dispecer',
    Radnik = 'Radnik',
    Admin = 'Admin',
    Potrosac = 'Potrosac'
}

export class Korisnik{
    ime: string;
    prezime: string;
    public username: string;
    tip: string;
    email: string;
    password: string;
    img: ImageBitmap;
    

    constructor(ime:string, prezime:string, username:string, tip:string, email:string, password:string){
        this.ime = ime;
        this.prezime = prezime;
        this.username = username;
        this.tip = tip;
        this.password = password;
    }
}