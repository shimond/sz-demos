using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.OutputCaching;

namespace CatalogApi.Controllers;

[ApiController]
[Route("[controller]")]
public class WeatherForecastController(ILogger<WeatherForecastController> logger, IProductsService productsService) 
    : ControllerBase
{

    [HttpGet("GetLastUpdate")]
    [OutputCache(Duration = 60)]
    public TimeData GetLastUpdateTime()
    {
        return new TimeData
        {
            Now = DateTime.Now,
            NowUtc = DateTime.UtcNow
        };
    }


    [HttpGet("GetProductsCount")]
    public async Task<int> GetProductsCount()
    {
        var result = await productsService.GetProductsCount();
        productsService.GetProductsCount().Wait();
        return result;
    }



    [HttpPost(Name = "SaveWeatherForecast")]
    public int Save(WeatherForecast we)
    {

        return 0;
    }




}
