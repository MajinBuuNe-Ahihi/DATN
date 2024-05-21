using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CAFE.Server.Core.Entity
{
    public class InventoryIngredient:BaseEntity
    {
        public  Guid inventoryID { get; set; }
        public Guid inventoryIngredientID { get; set; }
        public int amount { get; set; }
    }
}
