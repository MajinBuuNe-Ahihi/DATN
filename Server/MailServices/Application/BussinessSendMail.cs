using MailServices.Application.Interfaces;
using MailServices.Core.DTO;
using MailServices.Core.Entity;
using MailServices.Core.Interfaces;

namespace MailServices.Application
{
    public class BussinessSendMail : IBussinessSendMail
    {
        readonly IQueue _queue;
        readonly IMailCore _mailCore;

        public BussinessSendMail(IQueue queue, IMailCore mailCore)
        {
            _queue = queue;
            _mailCore = mailCore;
        }
        public void SendMail()
        {
            Mail mail =  _queue.ConsumerQueue<Mail>();
            if(mail != null && !string.IsNullOrEmpty(mail.To) && !string.IsNullOrEmpty(mail.From) && !string.IsNullOrEmpty(mail.Subject)) {         
                _mailCore.SendMailAsync(mail);
            }
        }

        public void SendQueue(MailParam mail)
        {
            Mail oMail = new Mail()
            {
                Body = mail.Body,
                From = "shuriken8668@gmail.com",
                To = mail.Email,
                Subject = mail.Subject,
                Name = mail.Name,
            };
            _queue.PublisherQueue<Mail>(oMail);
        }
    }
}
