namespace CAFE.Server.Core.Entity
{
    internal class WareHouseDetail
    {
        public Guid warehouseDetailID{ get; set; }
        public Guid warehouseID { get; set; }
        public Guid inventoryID { get; set; }
        public int quantity { get; set; }

    }
}
