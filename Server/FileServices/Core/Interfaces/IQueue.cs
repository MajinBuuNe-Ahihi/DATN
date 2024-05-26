namespace FileServices.Core.Interfaces
{
    public interface IQueue
    {
        public void PublisherQueue<T>(T body);
        public T ConsumerQueue<T>();
    }
}
