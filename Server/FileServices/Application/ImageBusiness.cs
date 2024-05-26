using FileServices.Application.Interfaces;
using FileServices.Core.DTO;
using FileServices.Core.Entity;
using FileServices.Core.Interfaces;

namespace FileServices.Application
{
    public class ImageBusiness:IImageBusiness
    {
        readonly IImageRepo _repo;
        public ImageBusiness(IImageRepo repo)
        {
            _repo = repo; 
        }

        public bool Submit(Image image)
        {
            _repo.Submit(image);
            return true;
        }
       
    }
}
