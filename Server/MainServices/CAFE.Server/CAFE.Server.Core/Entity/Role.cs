using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CAFE.Server.Core.Entity
{
    public class Role:BaseEntity
    {
        public  Guid RoleID { get; set; }
        public string RoleName { get; set; }
    }
}
