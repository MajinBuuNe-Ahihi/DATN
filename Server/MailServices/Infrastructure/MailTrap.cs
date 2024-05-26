using MailKit.Net.Smtp;
using MailServices.Core.Entity;
using MailServices.Core.Interfaces;
using System.Net;
using System.Net.Mail;


namespace MailServices.Infrastructure
{
    public class MailTrap : IMailCore
    {
        readonly System.Net.Mail.SmtpClient _smtpClient;
        public MailTrap() {
            _smtpClient = new System.Net.Mail.SmtpClient("192.168.0.100")
            {
                Port = 25,
                Credentials = new NetworkCredential("", ""),
                EnableSsl = false,
            };
        }
        public async Task SendMailAsync(Mail mail)
        {
            var mailMessage = new MailMessage
            {
                From = new MailAddress(mail.From),
                Subject =mail.Subject,
                Body =mail.Body,
                IsBodyHtml = true,
            };

            mailMessage.To.Add(mail.To);
            await _smtpClient.SendMailAsync(mailMessage);
        }
    }
}
