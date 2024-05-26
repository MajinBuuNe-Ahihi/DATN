using MailServices.Application.Interfaces;

namespace MailServices.Application
{
    public static class FactoryApplication
    {
        public static void  RegisterDependencyInjection(IServiceCollection services)
        {
            services.AddScoped<IBussinessSendMail, BussinessSendMail>();

        }
    }
}
