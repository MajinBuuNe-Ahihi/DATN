namespace FileServices.Core.Interfaces
{
    public interface IFileServicesStore
    {
        public  Task<MemoryStream> GetAsync(string bucketName, string objectName);
        public void Upload();
        public  Task UploadAsync(string bucketName, string objectName, string filePath, string type = "application/csv");
        public  Task DeleteAsync(string bucketName, string objectName);
    }
}
