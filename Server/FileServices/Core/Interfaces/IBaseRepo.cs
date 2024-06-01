using FileServices.Core.Entity.@interface;
using Microsoft.Data.SqlClient;
using System.Data.Common;
using System.Transactions;

namespace FileServices.Core.Interfaces
{
    public interface IBaseRepo
    {
        public bool Submit<T>(IBaseEntity<T> item, DbTransaction ts);
        public  bool Submit<T>(IBaseEntity<T> item);
        public T GetByID<T>(Guid id);
    }
}
