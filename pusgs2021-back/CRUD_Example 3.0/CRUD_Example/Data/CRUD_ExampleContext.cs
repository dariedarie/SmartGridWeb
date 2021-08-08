using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using CRUD_Example.models;

namespace CRUD_Example.Data
{
    public class CRUD_ExampleContext : DbContext
    {
        public CRUD_ExampleContext (DbContextOptions<CRUD_ExampleContext> options)
            : base(options)
        {
        }

        public DbSet<Book> Books { get; set; }

        public DbSet<CRUD_Example.models.Element> Element { get; set; }

        public DbSet<CRUD_Example.models.Incident> Incident { get; set; }

        public DbSet<CRUD_Example.models.Document> Document { get; set; }

        //public DbSet<CRUD_Example.models.Incident> Incident { get; set; }
    }
}
