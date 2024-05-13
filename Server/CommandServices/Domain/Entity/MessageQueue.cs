namespace CommandServices.Domain.Entity
{
    public class MessageQueue:HistoryEntity
    {
        public string ID { get; set; }
        public int Action { get; set; }
        public string Message { get; set; }
        public int Destination { get; set; }
    }
}
