export class BasicInfo{
    constructor(){}

    public id: string;
    public name: string;
    public tip: string;
    public priority: number;
    public status: string;
    public description: string;
    public confirmed: boolean;
    public ata: Date;
    public eta: Date;
    public affected_customers: number;
    public outage_time: Date;
    public etr: Date;
    public adresa: string;
    public calls: number;
    public voltage: number;
    public sheduled_time: Date;
}