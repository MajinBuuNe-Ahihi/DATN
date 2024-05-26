using CAFE.Server.Application.Interface.InventoryItem;
using CAFE.Server.Application.Interface.Register;
using CAFE.Server.Application.Modal;
using Microsoft.AspNetCore.Mvc;

namespace CAFE.Server.Main.API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class InventoryController:ControllerBase
    {
        private readonly ILogger<InventoryController> _logger;
        readonly IInventoryItemBusiness _inventoryBusiness;

        public InventoryController(ILogger<InventoryController> logger, IInventoryItemBusiness inventoryBusiness)
        {
            _logger = logger;
            _inventoryBusiness = inventoryBusiness;
        }

        [HttpPost]
        public IActionResult Register([FromBody] InventoryModal inventory)
        {

            var result = _inventoryBusiness.Create(inventory);
            return Ok(true);
        }

        [HttpGet]
        public IActionResult Get()
        {

            var result = _inventoryBusiness.GetInventory();
            return Ok(result);
        }

    }
}
