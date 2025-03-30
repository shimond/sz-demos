using Microsoft.AspNetCore.Identity;
using System.Security.Cryptography.X509Certificates;

namespace CatalogApi.Model;

public record Product(int Id, 
    string Name, 
    double Price, 
    bool IsExpensive, 
    string? Description = null);


//public record ProductWithBody
//{
//    public int Id { get; init; }
//    public required string Name { get; init; }
//    public string? Description { get; init; }
//    public double Price { get; init; }
//    public required bool IsExpensive { get; init; }
//}


public class Address
{
    public string? Street { get; set; }

    public Address()
    {

        Product p = new Product(1, "Bamba", 100, true);
        Product p2 = new Product(1, "Bamba", 100, true);
        var pAfterChange = p with { Price = 200 };
        //p.Price = 22;
        Console.WriteLine(  p == p2);
        Dictionary<Product, string> products = new();



    }
}




