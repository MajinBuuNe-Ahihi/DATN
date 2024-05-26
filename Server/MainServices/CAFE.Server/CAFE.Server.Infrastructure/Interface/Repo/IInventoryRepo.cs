using CAFE.Server.Core.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CAFE.Server.Infrastructure.Interface.Repo
{
    public interface IInventoryRepo:IBaseRepo
    {
        public List<Inventory> GetInventory();
    }
}
