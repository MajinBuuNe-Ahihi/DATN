using CAFE.Server.Core;
using Microsoft.Data.SqlClient;
using System.Data.Common;
using System.Transactions;

namespace CAFE.Server.Infrastructure
{
    public interface IBaseRepo
    {
        bool Submit(IBaseEntity item);
        bool Submit(IBaseEntity item, DbTransaction ts);
    }
}
