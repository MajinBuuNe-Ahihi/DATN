using CAFE.Server.Core.Entity;
using CAFE.Server.Infrastructure.Interface.Repo;
using Dapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CAFE.Server.Infrastructure.Repo
{
    public class InventoryRepo : BaseRepo,IInventoryRepo
    {
        readonly IDatabase _database;
        public InventoryRepo(IDatabase database) : base(database)
        {
            _database = database;
        }

        public List<Inventory> GetInventory()
        {
            string command = "select * from Inventory";
            return  this._database.GetConnection().Query<Inventory>( command,commandType: System.Data.CommandType.Text).ToList();
        }

    }
}
