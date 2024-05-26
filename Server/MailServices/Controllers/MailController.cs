using MailServices.Application.Interfaces;
using MailServices.Core.DTO;
using Microsoft.AspNetCore.Mvc;

namespace MailServices.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MailController:ControllerBase
    {
        readonly IBussinessSendMail _bussinessSendMail;
        public MailController(IBussinessSendMail bussinessSendMail)
        {
            _bussinessSendMail = bussinessSendMail;
        }

        [HttpPost]
        public IActionResult SendMail([FromBody] MailParam body)
        {
            _bussinessSendMail.SendQueue(body);
            return Ok(body);
        }
    }
}
