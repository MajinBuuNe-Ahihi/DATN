using FileServices.Application.Interfaces;
using FileServices.Core.DTO;
using Microsoft.AspNetCore.Mvc;
using Minio.Exceptions;

namespace FileServices.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ImageController : ControllerBase
    {
        readonly IImageTempBusiness _imageTempBusiness;
        readonly IImageUsingBusiness _imageUsingBusiness;

        public ImageController(IImageTempBusiness imageTempBusiness, IImageUsingBusiness imageUsingBusiness)
        {
            _imageTempBusiness = imageTempBusiness;
            _imageUsingBusiness = imageUsingBusiness;
        }

        [HttpPost("upload")]
        public async Task<IActionResult> UploadFile([FromForm] FileParams form)
        {
            if (form.File == null || form.File.Length == 0)
                return BadRequest("No file uploaded.");
            try
            {
                string name;
                using (var stream = new MemoryStream())
                {

                    await form.File.CopyToAsync(stream);
                    stream.Seek(0, SeekOrigin.Begin);
                    name = await _imageUsingBusiness.Submit(stream, form.Extension, form.ObjectID);
                }

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

        [HttpGet("download")]
        public async Task<IActionResult> DownloadFile([FromQuery] string bugetName, [FromQuery] string fileName, [FromQuery] string extension)
        {
                var memoryStream = new MemoryStream();
            try
            {
               
                    var result = await _imageUsingBusiness.DownloadImage(Guid.Parse(bugetName), Guid.Parse(fileName), extension);

                    if (result != null)
                    {
                        result.Seek(0, SeekOrigin.Begin);
                        await result.CopyToAsync(memoryStream);
                        memoryStream.Seek(0, SeekOrigin.Begin);
                        return File(memoryStream, "application/octet-stream", $"{fileName}{extension}");
                    }

                    return NotFound("File not found.");
                
            }
            catch (MinioException e)
            {
                return StatusCode(500, $"MinIO Error: {e.Message}");
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }finally
            {
                //memoryStream.Dispose();
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

        [HttpGet("/{objectID}")]
        public async Task<IActionResult> GetIAllImage(Guid objectID)
        {
            try
            {
                var result = this._imageUsingBusiness.GetAllImageName(objectID);
                return Ok(result);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

    }
}
