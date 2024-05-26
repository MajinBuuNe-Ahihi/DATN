using FileServices.Core.Entity.@interface;
using FileServices.Library;

namespace FileServices.Core.Entity
{
    public class BaseEntity: IBaseEntity
    {
        public DateTime CreatedDate { get; set; }
        public string CreatedBy { get; set; }
        public string ModifiedBy { get; set; }
        public DateTime ModifiedDate { get; set; }
        public List<object> UpdateScoped { get; set; }
        public bool isSync { get; set; }
        public EditModeEnumration EditMode { get ; set ; }
    }
}
