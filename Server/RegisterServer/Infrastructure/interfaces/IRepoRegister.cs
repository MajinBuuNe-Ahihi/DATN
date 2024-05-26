using RegisterServer.Core.Entity;

namespace RegisterServer.Infrastructure.interfaces
{
    public interface IRepoRegister:IBaseRepo
    {
        public bool Active(string codeActive, Guid registerID);
        public bool RestoreDB(Register register);
    }
}
