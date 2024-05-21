using CAFE.Server.Application.Interface.Register;
using CAFE.Server.Application.Register;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CAFE.Server.Application
{
    public static class FactoryApplication
    {
        public static void Injection(IServiceCollection servicecollection)
        {
            servicecollection.AddScoped<IRegisterBusiness, RegisterBusiness>();
        }
    }
}