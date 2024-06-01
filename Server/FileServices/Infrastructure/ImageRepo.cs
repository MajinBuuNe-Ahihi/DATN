using FileServices.Core.Interfaces;
using Microsoft.SqlServer.Management.Smo;
using System.Data.Common;

namespace FileServices.Infrastructure
{
    public class ImageRepo : BaseRepo, IImageRepo
    {
       readonly IDatabase _database;
        public ImageRepo(IDatabase database) : base(database)
        {
            _database = database;
        }

       
       
    }
}
