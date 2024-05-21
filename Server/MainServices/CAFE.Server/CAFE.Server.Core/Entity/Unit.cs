using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CAFE.Server.Core.Entity
{
    public class Unit:BaseEntity
    {
        public Guid UnitID { get; set; }
        public string UnitName { get; set; }
    }
}
