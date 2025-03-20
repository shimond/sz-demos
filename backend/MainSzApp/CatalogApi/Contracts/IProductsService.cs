namespace CatalogApi.Contracts;

public interface IProductsService
{
    Task<int> GetProductsCount();
}
