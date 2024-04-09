using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CAFE.Server.Library.Services.Interfaces
{
    public interface IConvertServices
    {
        /// <summary>
        /// hàm parse
        /// </summary>
        /// <param name="obj"></param>
        /// <returns></returns>
        string Serialize (object obj);

        /// <summary>
        /// hàm convert
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="obj"></param>
        /// <returns></returns>
        T Deserialize<T> (string obj);
    }
}
