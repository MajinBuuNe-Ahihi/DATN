using CAFE.Server.Application.Modal;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CAFE.Server.Application.Interface.Register
{
    public interface IRegisterBusiness
    {
        public Task Register(RegisterModal business);
        public bool ActiveStore(string active, Guid registerID);
        
    }
}
