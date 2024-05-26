using RegisterServer.Core.Enum;

namespace RegisterServer.Core.Entity
{
    public class BaseEntity<T>:IBaseEntity<T>
    {
        public DateTime CreatedDate { get; set; }
        public string CreatedBy { get; set; }
        public string ModifiedBy { get; set; }
        public DateTime ModifiedDate { get; set; }
        public List<T> UpdateScoped { get; set; }
        public bool isSync { get; set; }
        public EnumEditMode EditMode { get; set; }
    }
}
