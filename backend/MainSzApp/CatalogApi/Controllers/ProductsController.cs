
using CatalogApi.Model;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace CatalogApi.Controllers;

[ApiController]
[Route("api/Products")]

public class ProductsController(IProductsService productsService, ILogger<ProductsController> logger) :   ControllerBase
{
    [HttpGet]
    public async Task<ActionResult<List<Product>>> GetAll()
    {
        logger.LogInformation("Getting all products");
        var results = await productsService.GetAllProducts();
        return Ok("");
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Product>> GetById(int id)
    {
        var result = await productsService.GetProductById(id);
        if (result == null)
        {
            return NotFound();
        }
        return Ok(result);
    }

    [HttpPost]
    public async Task<ActionResult<Product>> Add(Product product)
    {
        var result = await productsService.AddProduct(product);
        return CreatedAtAction(nameof(GetById), new { id = result.Id }, result);
    }

}