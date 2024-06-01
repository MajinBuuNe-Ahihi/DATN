using Microsoft.AspNetCore.Mvc;
using RegisterServer.Application.interfaces;
using RegisterServer.Core.Entity;

namespace RegisterServer.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class RegisterController : ControllerBase
    {


        private readonly ILogger<RegisterController> _logger;
        readonly IRegisterBusiness _registerBusiness;

        public RegisterController(ILogger<RegisterController> logger, IRegisterBusiness registerBusiness)
        {
            _logger = logger;
            _registerBusiness = registerBusiness;
        }

        [HttpPost]
        public IActionResult Register([FromBody] Register RegisterModal)
        {

            _registerBusiness.Register(RegisterModal);
            return Ok();
        }

        [HttpPost("Active")]
        public IActionResult Active([FromBody] ActiveParam activeParam)
        {
            var result = _registerBusiness.ActiveStore(activeParam.VerifyCode, activeParam.RegisterID);
            return Ok(result);
        }
    }
}

