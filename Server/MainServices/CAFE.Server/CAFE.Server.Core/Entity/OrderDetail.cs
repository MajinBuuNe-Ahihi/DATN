using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CAFE.Server.Core.Entity
{
    public class OrderDetail:BaseEntity<OrderDetail>
    {
        public Guid OrderDetailID { get; set; }
        public Guid OrderID { get; set; }
        public Guid InventoryID { get; set; }
        public decimal Total { get; set; }
        public int Quantity { get; set; }
    }
}
