using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CAFE.Server.Core.Entity
{
    public class Order:BaseEntity
    {
        public Guid orderID { get; set; }
        public string orderNo { get; set; }
        public Guid tableID { get; set; }
        public decimal total { get; set; }
        public int paymentType { get; set; }
        public DateTime orderDate { get; set; }
        public int orderType { get; set; }
        public string note { get; set; }
    }
}
