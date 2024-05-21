using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CAFE.Server.Core.Entity
{
    public class Store : BaseEntity
    {
        public Guid StoreID { get; set; }
        public string? StoreName { get; set; }
        public Guid AddressID { get; set; }
        public Guid AreaID { get; set; }
        public string? DirectInfo { get; set; }
        public string? OpenTime { get; set; }
        public string? CloseTime { get; set; }
        public decimal ToPrice { get; set; }
        public decimal FromPrice { get; set; }
        public string? WifiName { get; set; }
        public string? WifiPass { get; set; }
        public string? Types { get; set; }
        public string? Convenients { get; set; }
        public string? PhoneNumber { get; set; }
        public string? Email { get; set; }
        public string? FacebookLink { get; set; }
        public string? InstagramLink { get; set; }
        public int GMT { get; set; }
        public int Website { get; set; }
    }
}
