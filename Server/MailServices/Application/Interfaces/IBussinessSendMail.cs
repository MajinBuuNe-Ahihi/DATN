using MailServices.Core.DTO;
using MailServices.Core.Entity;

namespace MailServices.Application.Interfaces
{
    public interface IBussinessSendMail
    {
        public void SendQueue(MailParam mail);
        public void SendMail();
    }
}
