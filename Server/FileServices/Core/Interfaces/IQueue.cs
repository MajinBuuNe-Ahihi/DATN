namespace FileServices.Core.Interfaces
{
    public interface IQueue
    {
        public void PublisherQueue<T>(T body, string queue, string key);
        public T ConsumerQueue<T>();
    }
}
