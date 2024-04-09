using CAFE.Server.Library.Services.Interfaces;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace CAFE.Server.Library.Services
{
    internal class ConvertServices : IConvertServices
    {
        public T Deserialize<T>(string obj)
        {
            return JsonConvert.DeserializeObject<T>(obj);
        }

        public string Serialize(object obj)
        {
            return JsonConvert.SerializeObject(obj);
        }

    }
}
