using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace CRUD_Example.models
{
    public class Book
    {
        [Key]
        //[Key, DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int BookId { get; set; }

        public string Title { get; set; }

        public decimal Price { get; set; }

        public string Description { get; set; }
    }
}
