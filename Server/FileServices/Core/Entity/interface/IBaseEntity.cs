using FileServices.Core.Enum;


namespace FileServices.Core.Entity.@interface
{
    public interface IBaseEntity<T>
    {
        DateTime CreatedDate { get; set; }
        string CreatedBy { get; set; }
        string ModifiedBy { get; set; }
        DateTime ModifiedDate { get; set; }
        List<T> UpdateScoped { get; set; }
        bool isSync { get; set; }
        EnumEditMode EditMode { get; set; }

    }
}
