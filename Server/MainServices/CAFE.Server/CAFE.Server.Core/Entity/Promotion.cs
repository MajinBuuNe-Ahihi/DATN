using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CAFE.Server.Core.Entity
{
    public class Promotion:BaseEntity
    {
        public Guid PromotionID { get; set; }
        public string PromotionName { get; set; }
        public string PromotionCode { get; set; }
        public int PromotionType { get; set; }
    }
}
