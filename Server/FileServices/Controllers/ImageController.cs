using FileServices.Application;
using FileServices.Application.Interfaces;
using FileServices.Core.DTO;
using FileServices.Core.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Minio.Exceptions;
using System.Net.WebSockets;

namespace FileServices.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ImageController:ControllerBase
    {
        readonly IImageTempBusiness _imageTempBusiness;

       public  ImageController(IImageTempBusiness imageTempBusiness) {
            _imageTempBusiness = imageTempBusiness;
        }

        [HttpPost("upload")]
        public async Task<IActionResult> UploadFile ([FromForm] FileParams form)
        {
            if (form.File == null || form.File.Length == 0)
                return BadRequest("No file uploaded.");
            try
            {
                var stream = new MemoryStream();
                await form.File.CopyToAsync(stream);
                stream.Seek(0, SeekOrigin.Begin);
               string name =  _imageTempBusiness.Submit(stream,form.Extension,form.Action);

                return Ok(new { fileName = name });
            }
            catch (MinioException e)
            {
                return StatusCode(500, $"MinIO Error: {e.Message}");
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        [HttpGet("download/{fileName}")]
        public async Task<IActionResult> DownloadFile(string fileName)
        {
            try
            {
                var memoryStream = new MemoryStream();
                //await _minioClient.GetObjectAsync(_bucketName, fileName, (stream) =>
                //{
                //    stream.CopyTo(memoryStream);
                //});
                memoryStream.Seek(0, SeekOrigin.Begin);
                return File(memoryStream, "application/octet-stream", fileName);
            }
            catch (MinioException e)
            {
                return StatusCode(500, $"MinIO Error: {e.Message}");
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        [HttpDelete("delete/{fileName}")]
        public async Task<IActionResult> DeleteFile(string fileName)
        {
            try
            {
                return Ok();
            }
            catch (MinioException e)
            {
                return StatusCode(500, $"MinIO Error: {e.Message}");
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        [HttpGet("/{action}/{id}")]
        public async Task<IActionResult> GetImage(string action, string id)
        {
            try
            {


                var image = new MemoryStream();
                return File(image, "image/jpeg");
            }
            catch (MinioException e)
            {
                return StatusCode(500, $"MinIO Error: {e.Message}");
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

    }
}
