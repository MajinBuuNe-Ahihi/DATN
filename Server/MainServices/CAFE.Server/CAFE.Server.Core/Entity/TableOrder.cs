using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CAFE.Server.Core.Entity
{
    internal class TableOrder:BaseEntity
    {
        public Guid tableID { get; set; }
        public string tableName { get; set; }
        public int status { get; set; }
        public int numberOfPeople { get; set; }
    }
}
