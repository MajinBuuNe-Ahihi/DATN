using CAFE.Server.Application;
using CAFE.Server.Infrastructure;
using Microsoft.SqlServer.Management.Smo.Wmi;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.


FactoryApplication.Injection(builder.Services);
FactoryInfrastructure.Injection(builder.Services);

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());

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
