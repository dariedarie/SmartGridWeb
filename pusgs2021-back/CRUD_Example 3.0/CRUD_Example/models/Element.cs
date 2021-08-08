using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace CRUD_Example.models
{
    public class Element
    {
        [Key]
        //[Key, DatabaseGenerated(DatabaseGeneratedOption.None)]
        public string Id { get; set; }

        public string Naziv { get; set; }

        public string Tip { get; set; }

        public string Adresa { get; set; }
    }
}
