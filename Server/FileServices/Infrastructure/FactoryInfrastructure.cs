using FileServices.Core.Interfaces;

namespace FileServices.Infrastructure
{
    public static class FactoryInfrastructure
    {
        public static void RegisterDependencyInjection(IServiceCollection services)
        {
            services.AddSingleton<IDatabase,SQLServerRepository>();
            services.AddSingleton<IFileServicesStore, MinioStorage>();
            services.AddScoped<IImageRepo, ImageRepo>();
            services.AddScoped<IImageTempRepo, ImageTempRepo>();
            services.AddScoped<IImageUsingRepo, ImageUsingRepo>();
        }
    }
}
