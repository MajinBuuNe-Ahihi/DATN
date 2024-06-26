﻿using CAFE.Server.Core;
using CAFE.Server.Core.Enum;
using CAFE.Server.Core.Entity;


namespace CAFE.Server.Core.Entity
{
    public class BaseEntity<T> : IBaseEntity<T>
    {
        public DateTime CreatedDate { get; set; }
        public string CreatedBy { get; set; }
        public string ModifiedBy { get; set; }
        public DateTime ModifiedDate { get; set; }
        public List<T> UpdateScoped { get; set; }
        public bool isSync { get; set; }
        public EnumEditMode EditMode { get ; set ; }
    }
}
