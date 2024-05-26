using FileServices.Application.Interfaces;
using FileServices.Core.Entity;
using FileServices.Core.Interfaces;

namespace FileServices.Application
{
    public class ImageUsingBusiness: IImageUsingBusiness
    {
        readonly IImageUsingRepo _repo;
        public ImageUsingBusiness(IImageUsingRepo repo)
        {
            _repo = repo; 
        }

        public bool Submit(ImageUsing image)
        {
            _repo.Submit(image);
            return true;
        }
    }
}
