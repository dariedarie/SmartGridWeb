export class DocumentEnt{
    id: string;
    //startDate: Date;
    //brTel: string;
    ime: string;
    tip: string;
    plan_rada: string;
    
    allOpsCompleted: boolean;
    allTagsRemoved: boolean;
    groundingRemoved: boolean;
    readyForService: boolean;

    constructor(id: string,
        ime: string,
        tip: string,
        plan_rada: string,
        allOpsCompleted: boolean,
        allTagsRemoved: boolean,
        groundingRemoved: boolean,
        readyForService: boolean){
        this.id = id;
        this.ime = ime;
        this.tip = tip;
        this.plan_rada = plan_rada;
        
        this.allOpsCompleted = allOpsCompleted;
        this.allTagsRemoved = allTagsRemoved;
        this.groundingRemoved = groundingRemoved;
        this.readyForService = readyForService;
    }

    validate(){
        var sveOk = true;
        if(!this.id){
            alert("Niste popunili id");
            return false;
        }
        if(!this.ime){
            alert("Niste popunili ime");
            return false;
        }
        if(!this.tip){
            alert("Niste popunili tip");
            return false;
        }
        if(!this.plan_rada){
            alert("Niste popunili plan_rada");
            return false;
        }
        return sveOk;
    }
}
