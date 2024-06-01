namespace FileServices.Core.Entity
{
    public class ImageUsing:BaseEntity<Image>
    {
        public Guid ImageID { get; set; }
        public Guid ObjectID { get; set; }
        public string Extension { get; set; }
    }
}
