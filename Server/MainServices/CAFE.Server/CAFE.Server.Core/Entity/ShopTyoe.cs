using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CAFE.Server.Core.Entity
{
    public class ShopType:BaseEntity
    {
        public Guid ShopTypeID { get; set; }
        public string ShopTypeName { get; set; }
    }
}
