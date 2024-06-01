using FileServices.Core.Entity;

namespace FileServices.Core.Interfaces
{
    public interface IImageUsingRepo : IBaseRepo
    {
        public List<ImageUsing> GetAllImageName(Guid objectID);
    }
}
