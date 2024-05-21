namespace FileServices.Application.Interfaces
{
    public interface IImageTempBusiness
    {
        public string Submit(MemoryStream stream,string extension,int action);
    }
}
