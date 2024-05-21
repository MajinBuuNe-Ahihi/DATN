using FileServices.Library;

namespace FileServices.Core.Entity.@interface
{
    public interface IBaseEntity
    {
        DateTime CreatedDate { get; set; }
        string CreatedBy { get; set; }
        string ModifiedBy { get; set; }
        DateTime ModifiedDate { get; set; }
        List<object> UpdateScoped { get; set; }
        bool isSync { get; set; }
        EditModeEnumration EditMode { get; set; }

    }
}
