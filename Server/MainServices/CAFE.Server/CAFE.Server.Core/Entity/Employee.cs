using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CAFE.Server.Core.Entity
{
    public class Employee:BaseEntity
    {
        public Guid employeeID { get; set; }
        public string employeeNo { get; set; }
        public string name { get; set; }
        public Guid roleID { get; set; }
        public string email { get; set; }
        public string phone { get; set; }
        public string address { get; set; }
        public DateTime birth { get; set; }
        public int active { get; set; }
        public string fullName { get; set; }
        public string password { get; set; }
    }
}
