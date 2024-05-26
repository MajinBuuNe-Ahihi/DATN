using MailServices.Core.Entity;

namespace MailServices.Core.Interfaces
{
    public interface IMailCore
    {
        public  Task SendMailAsync(Mail mail);
    }
}
