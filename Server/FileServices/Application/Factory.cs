using FileServices.Application.Interfaces;
using FileServices.Core.Entity;

namespace FileServices.Application
{
    public static class FactoryApplication
    {
        public static void  RegisterDependencyInjection(IServiceCollection services)
        {
            services.AddScoped<IImageBusiness, ImageBusiness>();
            services.AddScoped<IImageTempBusiness, ImageTempBusiness>();
            services.AddScoped<IImageUsingBusiness, ImageUsingBusiness>();

        }
    }
}
