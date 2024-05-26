using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CAFE.Server.Core.Entity
{
    public class Order:BaseEntity<OrderDetail>
    {
        public Guid OrderID { get; set; }
        public string OrderNo { get; set; }
        public Guid TableID { get; set; }
        public decimal Total { get; set; }
        public int PaymentType { get; set; }
        public DateTime OrderDate { get; set; }
        public int OrderType { get; set; }
        public string Note { get; set; }
    }
}
