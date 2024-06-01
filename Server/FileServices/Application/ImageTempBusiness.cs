using FileServices.Application.Interfaces;
using FileServices.Core.Entity;
using FileServices.Core.Interfaces;

namespace FileServices.Application
{
    public class ImageTempBusiness: IImageTempBusiness
    {
        readonly IImageTempRepo _repo;
        readonly IHostEnvironment _enviroment;
        public ImageTempBusiness(IImageTempRepo repo, IHostEnvironment environment)
        {
            _repo = repo; 
            _enviroment = environment;
        }

        public string Submit(MemoryStream stream, string extension, int action)
        {
            // lay path
           Guid fileName = Guid.NewGuid();
            var path = Path.Combine(_enviroment.ContentRootPath, "FileTemp", action.ToString());
            if(!Directory.Exists(path))
            {
                Directory.CreateDirectory(path);
            }
            using (FileStream outputFileStream = new FileStream(path+ "\\"+fileName.ToString() + extension, FileMode.Create))
            {
                stream.CopyTo(outputFileStream);
            }

            var image = new ImageTemp()
            {
                ImageID = fileName,
                ImageExtension = extension,
                ImageLocation = path,
                EditMode = Core.Enum.EnumEditMode.Add,
                CreatedBy = "hvmanh",
                CreatedDate = DateTime.Now,
                ModifiedBy = "hvmanh",
                 ModifiedDate = DateTime.Now
            };
            //save vao serve

            return fileName.ToString("n");
        }
    }
}
