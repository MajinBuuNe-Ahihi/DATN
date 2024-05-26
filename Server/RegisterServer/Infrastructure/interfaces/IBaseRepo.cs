using RegisterServer.Core.Entity;
using System.Data.Common;

namespace RegisterServer.Infrastructure.interfaces
{
    public interface IBaseRepo
    {
        bool Submit<T>(IBaseEntity<T> item);
        bool Submit<T>(IBaseEntity<T> item, DbTransaction ts);
        T GetByID<T>(Guid id);
    }
}
