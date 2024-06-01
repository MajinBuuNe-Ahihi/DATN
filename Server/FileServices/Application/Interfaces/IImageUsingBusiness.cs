using FileServices.Core.Entity;

namespace FileServices.Application.Interfaces
{
    public interface IImageUsingBusiness
    {
        public Task<string> Submit(MemoryStream stream, string extension, Guid objectID);
        public List<ImageUsing> GetAllImageName(Guid objectID);
        public Task<MemoryStream> DownloadImage(Guid objectID,Guid imageID, string extension);
    }
}
