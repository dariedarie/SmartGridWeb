using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace CRUD_Example.models
{
    public class Document
    {
        [Key]
        //[Key, DatabaseGenerated(DatabaseGeneratedOption.None)]
        public string Id { get; set; }

        public string Ime { get; set; }

        public string Tip { get; set; }

        public string Plan_rada { get; set; }

        public bool AllOpsConfirmed { get; set; }

        public bool AllTagsRemoved { get; set; }

        public bool GroundingRemoved { get; set; }

        public bool ReadyForService { get; set; }

 
    }
}
