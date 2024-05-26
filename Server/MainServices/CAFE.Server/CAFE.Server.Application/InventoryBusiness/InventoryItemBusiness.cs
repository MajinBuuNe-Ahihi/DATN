using AutoMapper;
using CAFE.Server.Application.Interface.InventoryItem;
using CAFE.Server.Application.Modal;
using CAFE.Server.Core.Entity;
using CAFE.Server.Infrastructure.Interface.Queue;
using CAFE.Server.Infrastructure.Interface.Repo;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CAFE.Server.Application.InventoryBussiness
{
    public class InventoryItemBusiness : IInventoryItemBusiness
    {
        readonly IInventoryRepo _inventoryRepo;

        public InventoryItemBusiness(IInventoryRepo inventoryRepo)
        {
            _inventoryRepo = inventoryRepo;
        }


        public List<Core.Entity.Inventory> GetInventory()
        {
             return  this._inventoryRepo.GetInventory();
        }

        public Task Create(InventoryModal inventory)
        {
            Inventory inventory1 = inventory.item;
            inventory1.EditMode = Core.Enum.EnumEditMode.Add;
            inventory1.UpdateScoped = inventory.inventoryIngredients;
            var result = this._inventoryRepo.Submit(inventory1);
            return Task.CompletedTask;
        }
    }
}
