using SixLabors.ImageSharp;
using SixLabors.ImageSharp.Processing;
namespace FileServices.Library
{
    public static class Utility
    {
        public static byte[] ResizeImage(byte[] imageData, int width, int height)
        {
            using (var image = Image.Load(imageData))
            {
                image.Mutate(x => x.Resize(width, height));
                using (var stream = new MemoryStream())
                {
                    image.SaveAsJpeg(stream);
                    return stream.ToArray();
                }
            }
        }

        public static string  GenNameProcede(string entity, EditModeEnumration action)
        {
            string result = string.Empty;
            switch(action)
            {
                case EditModeEnumration.Add:
                    result = string.Format("Proc_Insert_{0}",entity);
                    break;
                case EditModeEnumration.Delete:
                    result = string.Format("Proc_Delete_{0}", entity);                
                    break;
                case EditModeEnumration.Edit:
                    result = string.Format("Proc_Edit_{0}", entity);
                    break;
            }
            return result;
        }
    }


}
