using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CAFE.Server.Core.Entity
{
    public class InventoryIngredient:BaseEntity<InventoryIngredient>
    {
        public  Guid InventoryID { get; set; }
        public Guid InventoryIngredientID { get; set; }
        public int Amount { get; set; }
    }
}
