namespace FileServices.Core.Entity
{
    public class ImageTemp:BaseEntity<ImageTemp>
    {
        public Guid ImageID { get; set; }
        public string ImageExtension { get; set; }
        public string ImageLocation { get; set; }
    }
}
