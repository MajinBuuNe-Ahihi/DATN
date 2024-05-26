using RegisterServer.Infrastructure.interfaces;

namespace RegisterServer.Infrastructure
{
    public static class FactoryInfrastructure
    {
        public static void RegisterDependencyInjection(IServiceCollection services)
        {
            services.AddSingleton<IQueue, RabitmqQueue>();
            services.AddScoped<IDatabase, SQLServerRepo>();
            services.AddScoped<IDatabaseRegister, SQLServerRegisterRepo>();
            services.AddScoped<IRepoRegister, RegisterRepo>();
        }
    }
}
