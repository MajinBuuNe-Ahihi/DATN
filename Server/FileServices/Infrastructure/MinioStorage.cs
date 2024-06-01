using FileServices.Core.Interfaces;
using Minio;
using Minio.DataModel.Args;
using Minio.Exceptions;

namespace FileServices.Infrastructure
{
    public class MinioStorage : IFileServicesStore
    {
        readonly MinioClient _minioClient;
        public MinioStorage()
        {
            _minioClient = (MinioClient?)new MinioClient()
                          .WithEndpoint("play.min.io", 9000)
                          .WithCredentials("6hd2jpoAslhsp0X1hKIV", "OMnXPccXhxlNNlkjpHH81MQgOOYp3A4qi7AidAWL")
                          .WithSSL();
            
        }
        public async Task DeleteAsync(string bucketName, string objectName)
        {
            try
            {
                await _minioClient.RemoveObjectAsync(new RemoveObjectArgs()
                                                     .WithBucket(bucketName)
                                                     .WithObject(objectName));
                Console.WriteLine("Object removed successfully.");
            }
            catch (MinioException e)
            {
                Console.WriteLine($"MinIO exception: {e}");
            }
        }

        public async Task<MemoryStream> GetAsync(string bucketName, string objectName)
        {
            var fileStream = new MemoryStream();
            try
            {
                await _minioClient.GetObjectAsync(new GetObjectArgs()
                                              .WithBucket("store")
                                              .WithObject(objectName + bucketName)
                                              .WithCallbackStream(async stream =>
                                              {
                                                  await stream.CopyToAsync(fileStream);
                                              }));

                Console.WriteLine("Object retrieved successfully.");
            }
            catch (Exception ex)
            {
                Console.WriteLine("File Upload Error: {0}", ex.Message);
            }
            return fileStream;
        }

        public void Upload()
        {
            throw new NotImplementedException();
        }

        public async Task UploadAsync(string bucketName, string objectName, string filePath, string type = "application/csv")
        {
            try
            {
                var beArgs = new BucketExistsArgs()
                   .WithBucket("store");
                bool found = await _minioClient.BucketExistsAsync(beArgs);
                if (!found)
                {
                    var mbArgs = new MakeBucketArgs()
                        .WithBucket(bucketName);
                    await _minioClient.MakeBucketAsync(mbArgs);
                }
                // Upload a file to bucket.
                var putObjectArgs = new PutObjectArgs()
                    .WithBucket("store")
                    .WithObject(objectName+ bucketName)
                    .WithFileName(filePath)
                    .WithContentType(type);
                await _minioClient.PutObjectAsync(putObjectArgs);
                Console.WriteLine("Successfully uploaded " + objectName);

            }
            catch (MinioException e)
            {
                Console.WriteLine("File Upload Error: {0}", e.Message);
            }

        }
    }
}
