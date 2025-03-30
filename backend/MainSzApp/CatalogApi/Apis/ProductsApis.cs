using CatalogApi.Contracts;
using CatalogApi.Model;
using CatalogApi.Services;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Infrastructure;
using System.Reflection.Metadata.Ecma335;

namespace CatalogApi.Apis;

public static class ProductsApis
{
    //Validation?
    //Mapping?
    public static IEndpointRouteBuilder MapProducts(this IEndpointRouteBuilder app)
    {
        var group = app.MapGroup("api/Products").RequireAuthorization();
        group.MapGet("", GetAllProducts);
        group.MapPost("", Add);
        group.MapGet("{id}", GetById);
        return app;
    }

    static async Task<Ok<List<Product>>> GetAllProducts(IProductsService productsService)
    {
        var res = await productsService.GetAllProducts();
        return TypedResults.Ok(res);
    }

    static async Task<Results<Ok<Product>, NotFound>> GetById(int id, IProductsService service)
    {
        var res = await service.GetProductById(id);
        if (res == null)
        {
            return TypedResults.NotFound();
        }
        return TypedResults.Ok(res);
    }
    static  async Task<Created<Product>> Add(Product product, IProductsService productsService)
    {
        var result = await productsService.AddProduct(product);
        return TypedResults.Created($"api/products/{result.Id}", result);
    }
}
