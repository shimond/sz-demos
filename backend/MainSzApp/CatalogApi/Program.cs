using Microsoft.AspNetCore.OutputCaching;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddOpenApi();
builder.Services.AddOutputCache(); // add default output cache (in memory)

var app = builder.Build();
app.UseOutputCache();
app.MapOpenApi();
app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();

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