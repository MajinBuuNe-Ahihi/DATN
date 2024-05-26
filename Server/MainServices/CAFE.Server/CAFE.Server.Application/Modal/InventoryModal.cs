using CAFE.Server.Core.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CAFE.Server.Application.Modal
{
    public class InventoryModal
    {
        public Inventory item { get; set; }
        public List<InventoryIngredient>  inventoryIngredients { get; set; }
    }
}
