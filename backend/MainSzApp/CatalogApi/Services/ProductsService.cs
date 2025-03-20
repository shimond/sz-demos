using CatalogApi.Contracts;
using System.Net.Sockets;

namespace CatalogApi.Services;

public class ProductsService : IProductsService
{
    public async Task<int> GetProductsCount()
    {
        await Task.Delay(2000);
        return Random.Shared.Next(1, 500);
    }
}


// I/O
// 1. get data from database
// 2. get data from another service (rest)
// 3. get data from files