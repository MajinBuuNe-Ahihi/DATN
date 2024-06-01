using Dapper;
using FileServices.Core.Entity;
using FileServices.Core.Interfaces;
using System.Linq;

namespace FileServices.Infrastructure
{
    public class ImageUsingRepo : BaseRepo, IImageUsingRepo
    {
        readonly IDatabase _database;
        public ImageUsingRepo(IDatabase database) : base(database)
        {
            _database = database;
        }

        public List<ImageUsing> GetAllImageName(Guid objectID)
        {
            var temp = "select * from ImageUsing where objectID = @ID";
            var param = new DynamicParameters();
            param.Add("@ID", objectID, System.Data.DbType.Guid);
            return (List<ImageUsing>)this._database.GetConnection().Query<ImageUsing>(temp, param);
        }
    }
}
