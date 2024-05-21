using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CAFE.Server.Infrastructure.Interface.Repo
{
    public interface IRegisterRepo:IBaseRepo
    {
        public bool Active(string codeActive, Guid registerID);
    }
}
