using CAFE.Server.Application.Interface.Register;
using CAFE.Server.Application.Modal;
using Microsoft.AspNetCore.Mvc;

namespace CAFE.Server.Infrastructure.Server.Register.API.Controllers
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
        public IActionResult Register([FromBody] RegisterModal RegisterModal)
        {

            _registerBusiness.Register(RegisterModal);
            return Ok();
        }

        [HttpPost("Active")]
        public IActionResult Active(Guid registerID, string verifyCode)
        {
           var  result = _registerBusiness.ActiveStore(verifyCode,registerID);
            return Ok(result);
        }
    }
}
