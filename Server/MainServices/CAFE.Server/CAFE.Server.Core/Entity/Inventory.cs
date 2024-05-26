using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CAFE.Server.Core.Entity
{
    public class Inventory:BaseEntity<InventoryIngredient>
    {
        public Guid InventoryID { get; set; }
        public string InventoryName { get; set; }
        public Guid UnitID { get; set; }
        public decimal Total { get; set; }
        public int Quantity { get; set; }
        public int InventoryType { get; set; }
        public int Active { get; set; }
        public decimal PriceS { get; set; }
        public decimal PriceM { get; set; }
        public decimal PriceL { get; set; }
        public decimal PriceXL { get; set; }
        public string Note { get; set; }
    }
}
