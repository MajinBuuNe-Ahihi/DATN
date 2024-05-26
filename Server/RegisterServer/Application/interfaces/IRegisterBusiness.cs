using RegisterServer.Core.Entity;

namespace RegisterServer.Application.interfaces
{
    public interface IRegisterBusiness
    {
        public Task Register(Register business);
        public bool ActiveStore(string active, Guid registerID);

    }
}
