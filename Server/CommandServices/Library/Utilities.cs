using CommandServices.Domain.Config;
using Microsoft.Extensions.Configuration;

namespace CommandServices.Library
{
    public static class Utilities
    {
        public static string BuildConnection(string protocol, string host, int port)
        {
            return String.Format("{0}://{1}:{2}/", protocol, host, port);
        }

        public static void ConfigureServices(WebApplicationBuilder app)
        {
            if(app != null)
            {
                app.Services.AddSingleton(new GrpcConfig(app.Configuration.GetSection("GrpcConfig")));
            }
        }
    }
}
