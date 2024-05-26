using CAFE.Server.Application.Modal;
using CAFE.Server.Core.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CAFE.Server.Application.Interface.InventoryItem
{
    public interface IInventoryItemBusiness
    {
        public Task Create(InventoryModal inventory);
        public List<CAFE.Server.Core.Entity.Inventory> GetInventory();
    }
}
