using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CAFE.Server.Core.Entity
{
    public class Inventory:BaseEntity
    {
        public Guid inventoryID { get; set; }
         public string  inventoryName { get; set; }
        public Guid unitID { get; set; }
        public decimal total { get; set; }
        public int quantity { get; set; }
        public int inventoryType { get; set; }
        public int active { get; set; }
        public decimal priceS { get; set; }
        public decimal priceM { get; set; }
        public decimal priceL { get; set; }
        public decimal priceXL { get; set; }
        public string note { get; set; }
    }
}
