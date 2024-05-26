using RegisterServer.Application.interfaces;

namespace RegisterServer.Application
{
    public static class FactoryApplication
    {
        public static void Injection(IServiceCollection servicecollection)
        {
            servicecollection.AddScoped<IRegisterBusiness, RegisterBusiness>();
        }
    }
}
