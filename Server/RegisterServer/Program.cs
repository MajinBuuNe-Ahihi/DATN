using RegisterServer.Application;
using RegisterServer.Core.config;
using RegisterServer.Infrastructure;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
FactoryApplication.Injection(builder.Services);
FactoryInfrastructure.RegisterDependencyInjection(builder.Services);

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.Configure<QueueConfig>(builder.Configuration.GetSection("QueueConnection"));
var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
