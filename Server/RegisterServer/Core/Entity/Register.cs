﻿namespace RegisterServer.Core.Entity
{
    public class Register:BaseEntity<Register>
    {
        public Guid RegisterID { get; set; }
        public string? StoreName { get; set; }
        public string StoreAddress { get; set; }
        public Guid AreaID { get; set; }
        public string? DirectInfo { get; set; }
        public string? OpenTime { get; set; }
        public string? CloseTime { get; set; }
        public decimal ToPrice { get; set; }
        public decimal FromPrice { get; set; }
        public string? WifiName { get; set; }
        public string? WifiPass { get; set; }
        public string? Types { get; set; }
        public string? Convenients { get; set; }
        public string? PhoneNumber { get; set; }
        public string? Email { get; set; }
        public string? FacebookLink { get; set; }
        public string? InstagramLink { get; set; }
        public int GMT { get; set; }
        public int Website { get; set; }
        public string? VerifiedCode { get; set; }
        public string Link { get; set; }
    }
}
