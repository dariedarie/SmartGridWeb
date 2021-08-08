using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using CRUD_Example.Data;
using CRUD_Example.models;

namespace CRUD_Example.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ElementsController : ControllerBase
    {
        private readonly CRUD_ExampleContext _context;

        public ElementsController(CRUD_ExampleContext context)
        {
            _context = context;
        }

        // GET: api/Elements
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Element>>> GetElement()
        {
            return await _context.Element.ToListAsync();
        }

        // GET: api/Elements/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Element>> GetElement(string id)
        {
            var element = await _context.Element.FindAsync(id);

            if (element == null)
            {
                return NotFound();
            }

            return element;
        }

        // PUT: api/Elements/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutElement(string id, Element element)
        {
            if (id != element.Id)
            {
                return BadRequest();
            }

            _context.Entry(element).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ElementExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Elements
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public async Task<ActionResult<Element>> PostElement(Element element)
        {
            _context.Element.Add(element);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (ElementExists(element.Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetElement", new { id = element.Id }, element);
        }

        // DELETE: api/Elements/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Element>> DeleteElement(string id)
        {
            var element = await _context.Element.FindAsync(id);
            if (element == null)
            {
                return NotFound();
            }

            _context.Element.Remove(element);
            await _context.SaveChangesAsync();

            return element;
        }

        private bool ElementExists(string id)
        {
            return _context.Element.Any(e => e.Id == id);
        }
    }
}
