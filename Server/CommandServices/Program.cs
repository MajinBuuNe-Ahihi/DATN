using CommandServices;
using CommandServices.Application.Publish;
using CommandServices.Library;
using Microsoft.AspNetCore.Server.Kestrel.Core;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Options;
using System.Net;

var builder = WebApplication.CreateBuilder(args);

Utilities.ConfigureServices(builder);


// Add services to the container.
builder.WebHost.ConfigureKestrel(serverOptions =>
{
    serverOptions.Limits.MaxConcurrentConnections = 100;
});

builder.Services.AddControllers();
builder.Services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());

builder.Services.AddGrpc();
var app = builder.Build();

app.UseRouting();
app.UseEndpoints(endpoints =>
{
    endpoints.MapGrpcService<PublishServices>();

    endpoints.MapGet("/Proto/GrpcCommandServer.proto", async context =>
    {
        await context.Response.WriteAsync(File.ReadAllText("Proto/GrpcCommandServer.proto"));
    });
});

app.Run();
