using FileServices.Core.Interfaces;

namespace FileServices.Infrastructure
{
    public class ImageUsingRepo : BaseRepo, IImageUsingRepo
    {
        readonly IDatabase _database;
        public ImageUsingRepo(IDatabase database) : base(database)
        {
            _database = database;
        }
    }
}
