using MailServices.Application;
using MailServices.Application.Worker;
using MailServices.Core.config;
using MailServices.Infrastructure;
using Microsoft.Extensions.Configuration;

var builder = WebApplication.CreateBuilder(args);

FactoryApplication.RegisterDependencyInjection(builder.Services);
FactoryInfrastructure.RegisterDependencyInjection(builder.Services);
// Add services to the container.
builder.Services.AddHostedService<WorkerServices>();
builder.Services.AddControllers();
builder.Services.Configure<QueueConfig>(builder.Configuration.GetSection("QueueConnection"));

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

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
