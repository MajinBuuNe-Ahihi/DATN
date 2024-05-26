using FileServices.Core.Entity.@interface;
using Microsoft.Data.SqlClient;
using System.Data.Common;
using System.Transactions;

namespace FileServices.Core.Interfaces
{
    public interface IBaseRepo
    {
        bool Submit(IBaseEntity item);
        bool Submit(IBaseEntity item, DbTransaction ts);
    }
}
