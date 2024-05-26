namespace FileServices.Core.Entity
{
    public class ImageTemp:BaseEntity
    {
        public Guid ImageID { get; set; }
        public string ImageExtension { get; set; }
        public string ImageLocation { get; set; }
    }
}
