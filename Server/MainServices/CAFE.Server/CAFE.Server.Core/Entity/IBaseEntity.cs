
using CAFE.Server.Core.Enum;

namespace CAFE.Server.Core
{
    public interface IBaseEntity<T>
    {
        DateTime CreatedDate { get; set; }
        string CreatedBy { get; set; }
        string ModifiedBy { get; set; }
        DateTime ModifiedDate { get; set; }
        List<T> UpdateScoped {get; set; }
        bool isSync { get; set; }
        EnumEditMode EditMode { get; set; }

    }
}
