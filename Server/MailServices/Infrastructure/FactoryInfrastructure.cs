using MailServices.Core.Interfaces;

namespace MailServices.Infrastructure
{
    public static class FactoryInfrastructure
    {
        public static void RegisterDependencyInjection(IServiceCollection services)
        {
            services.AddSingleton<IQueue,RabitmqQueue>();
            services.AddScoped<IMailCore, MailTrap>();

        }
    }
}
