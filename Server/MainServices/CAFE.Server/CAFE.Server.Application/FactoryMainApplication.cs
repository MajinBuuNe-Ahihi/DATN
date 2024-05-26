using CAFE.Server.Application.Interface.InventoryItem;
using CAFE.Server.Application.Interface.Register;
using CAFE.Server.Application.InventoryBussiness;
using CAFE.Server.Application.Register;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CAFE.Server.Application
{
    public static class FactoryMainApplication
    {
        public static void Injection(IServiceCollection servicecollection)
        {
            servicecollection.AddScoped<IInventoryItemBusiness, InventoryItemBusiness>();
        }
    }
}