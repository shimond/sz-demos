using CatalogApi.Model;

namespace CatalogApi.Contracts;

public interface IProductsService
{
    Task<int> GetProductsCount();
    Task<List<Product>> GetAllProducts();
    Task<Product?> GetProductById(int id);
    Task<Product> AddProduct(Product product);
    Task<Product> UpdateProduct(Product product);
    Task DeleteProduct(int id);

}
