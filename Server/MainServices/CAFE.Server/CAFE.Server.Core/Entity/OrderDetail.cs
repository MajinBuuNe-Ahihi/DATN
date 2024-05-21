using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CAFE.Server.Core.Entity
{
    public class OrderDetail:BaseEntity
    {
        public Guid orderDetailID { get; set; }
        public Guid orderID { get; set; }
        public Guid inventoryID { get; set; }
        public decimal total { get; set; }
        public int quantity { get; set; }
    }
}
