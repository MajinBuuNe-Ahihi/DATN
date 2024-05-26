﻿using Microsoft.AspNetCore.Mvc;
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
        public IActionResult Active(Guid registerID, string verifyCode)
        {
            var result = _registerBusiness.ActiveStore(verifyCode, registerID);
            return Ok(result);
        }
    }
}
