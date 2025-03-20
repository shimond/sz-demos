var builder = WebApplication.CreateBuilder(args);
// register services
builder.Services.AddControllers();

//builder.Services.AddTransient // any time service requested
//builder.Services.AddScoped // once per request
//builder.Services.AddSingleton // one instance for all requests


builder.Services.AddScoped<IProductsService, ProductsService>();
builder.Services.AddEndpointsApiExplorer(); // for minimal api
builder.Services.AddOpenApi();
builder.Services.AddOutputCache(); // add default output cache (in memory)


var app = builder.Build();
// build application middlewares
app.UseOutputCache();
app.MapOpenApi();
app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();

var productsGroup = app.MapGroup("products");

productsGroup.MapGet("GetCurrentTime", (IProductsService productsService) => new TimeData
{
    Now = DateTime.Now,
    NowUtc = DateTime.UtcNow
});

app.Run();






//class MyClassCacheStore : IOutputCacheStore
//{
//    public ValueTask EvictByTagAsync(string tag, CancellationToken cancellationToken)
//    {
//        throw new NotImplementedException();
//    }

//    public ValueTask<byte[]?> GetAsync(string key, CancellationToken cancellationToken)
//    {
//        throw new NotImplementedException();
//    }

//    public ValueTask SetAsync(string key, byte[] value, string[]? tags, TimeSpan validFor, CancellationToken cancellationToken)
//    {
//        throw new NotImplementedException();
//    }
//}