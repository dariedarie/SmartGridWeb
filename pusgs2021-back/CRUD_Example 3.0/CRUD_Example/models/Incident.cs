using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace CRUD_Example.models
{
    public class Incident
    {
        [Key]
        //[Key, DatabaseGenerated(DatabaseGeneratedOption.None)]
        public string Id { get; set; }

        public string Name { get; set; }
        public int Priority { get; set; }
        public string Tip { get; set; }
        public string Status { get; set; }
        public string Description { get; set; }
        public bool Confirmed { get; set; }
        public DateTime Ata { get; set; }
        public DateTime Eta { get; set; }
        public DateTime Outage_time { get; set; }
        public DateTime Etr { get; set; }

        public string Adresa { get; set; }
        public int Afektovani_potrosaci { get; set; }
        public int Calls { get; set; }
        public int Nivo_napona { get; set; }
        public string korisnik { get; set; }
        //public Element[] Oprema { get; set; }
        public string Uzrok { get; set; }
        public string Poduzrok { get; set; }
        public string Tip_konstrukcije { get; set; }
        public string Materijal { get; set; }
    }
}

//id: string;
//name: string
//priority: number;
//tip: string;
//status: string;
//description: string;
//confirmed: boolean;
//ata: Date;
//eta: Date;
//outage_time: Date;
//etr: Date;
//adresa: string;
//afektovani_potrosaci: number;
//calls: number;
//nivo_napona: number;
//korisnik: string;
//oprema: Array<Elemenat>;

//uzrok: string;
//poduzrok: string;
//tip_konstrukcije: string;
//materijal: string;