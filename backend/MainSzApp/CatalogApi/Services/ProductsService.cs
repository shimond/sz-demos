using CatalogApi.Model;
using Microsoft.Extensions.Options;

namespace CatalogApi.Services;

public class ProductsService : IProductsService
{
    public async Task<int> GetProductsCount()
    {
        await Task.Delay(2000);
        return Random.Shared.Next(1, 500);
    }

    public Task<List<Product>> GetAllProducts()
    {
        throw new NotImplementedException();
    }

    public Task<Product?> GetProductById(int id)
    {
        throw new NotImplementedException();
    }

    public Task<Product> AddProduct(Product product)
    {
        throw new NotImplementedException();
    }

    public Task<Product> UpdateProduct(Product product)
    {
        throw new NotImplementedException();
    }

    public Task DeleteProduct(int id)
    {
        throw new NotImplementedException();
    }

}