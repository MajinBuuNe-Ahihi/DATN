using FileServices.Application.Interfaces;
using FileServices.Core.Entity;
using FileServices.Core.Interfaces;

namespace FileServices.Application
{
    public class ImageUsingBusiness : IImageUsingBusiness
    {
        readonly IImageUsingRepo _repo;
        readonly IHostEnvironment _enviroment;
        readonly IFileServicesStore _fileServicesStore;

        public ImageUsingBusiness(IImageUsingRepo repo, IHostEnvironment environment, IFileServicesStore fileServicesStore)
        {
            _repo = repo;
            _enviroment = environment;
            _fileServicesStore = fileServicesStore;
        }

        public async Task<MemoryStream> DownloadImage(Guid objectID, Guid imageID, string extension)
        {
            var path = Path.Combine(_enviroment.ContentRootPath, "FileTemp", objectID.ToString());
            var fullPath = Path.Combine(path, imageID.ToString() + extension);
            //return await this._fileServicesStore.GetAsync(objectID.ToString(), imageID.ToString());
            FileStream fileStream = new FileStream(fullPath, FileMode.Open);
            MemoryStream memoryStream = new MemoryStream();
            fileStream.CopyTo(memoryStream);
            return memoryStream;
        }

        public List<ImageUsing> GetAllImageName(Guid objectID)
        {
            return this._repo.GetAllImageName(objectID);
        }

        public async Task<string> Submit(MemoryStream stream, string extension, Guid objectID)
        {
            // lay path
            Guid fileName = Guid.NewGuid();
            var path = Path.Combine(_enviroment.ContentRootPath, "FileTemp", objectID.ToString());
            if (!Directory.Exists(path))
            {
                Directory.CreateDirectory(path);
            }
            var fullPath = Path.Combine(path, fileName.ToString() + extension);
            using (FileStream outputFileStream = new FileStream(fullPath, FileMode.Create))
            {
                stream.CopyTo(outputFileStream);
            }

            await _fileServicesStore.UploadAsync(objectID.ToString(), fileName.ToString(), fullPath);

            var image = new ImageUsing()
            {
                ImageID = fileName,
                ObjectID = objectID,
                EditMode = Core.Enum.EnumEditMode.Add,
                CreatedBy = "hvmanh",
                CreatedDate = DateTime.Now,
                ModifiedBy = "hvmanh",
                ModifiedDate = DateTime.Now,
                Extension = extension,
            };
            //save vao serve

            _repo.Submit(image);
            return fileName.ToString("n");
        }
    }
}
