namespace FileServices.Core.DTO
{
    public class FileParams
    {
        public IFormFile File { get; set; }
        public string Extension { get; set; }
        public Guid ObjectID { get; set; }
        public int Action {  get; set; }
    }
}
