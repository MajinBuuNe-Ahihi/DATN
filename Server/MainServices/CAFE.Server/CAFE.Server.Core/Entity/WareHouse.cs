namespace CAFE.Server.Core.Entity
{
    public class WareHouse : BaseEntity<WareHouseDetail>
    {
        public Guid warehouseID { get; set; }
        public string warehouseNo { get; set; }
        public Guid unitID { get; set; }
        public int warehouseType { get; set; }
        public DateTime warehouseDate { get; set; }
        public int quantity { get; set; }
    }
}
