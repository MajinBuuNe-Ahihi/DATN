using CAFE.Server.Infrastructure.Interface.Queue;
using CAFE.Server.Infrastructure.Interface.Repo;
using CAFE.Server.Infrastructure.Queue;
using CAFE.Server.Infrastructure.Repo;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.SqlServer.Management.Smo.Wmi;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CAFE.Server.Infrastructure
{
    public static class FactoryMainInfrastructure
    {
        public static void Injection(IServiceCollection iservicecollection)
        {
            iservicecollection.AddScoped<IDatabase,SQLServerRepository>();
            iservicecollection.AddScoped<IInventoryRepo, InventoryRepo>();
            iservicecollection.AddScoped<IQueue, RabitmqQueue>();
        }
    }
}
