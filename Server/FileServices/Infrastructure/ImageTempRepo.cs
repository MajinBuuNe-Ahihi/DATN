using FileServices.Core.Interfaces;

namespace FileServices.Infrastructure
{
    public class ImageTempRepo : BaseRepo, IImageTempRepo
    {
        readonly IDatabase _database;
        public ImageTempRepo(IDatabase database) : base(database)
        {
            _database = database;
        }
    }
}
