using MailServices.Core.config;
using MailServices.Core.Interfaces;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Options;
using Newtonsoft.Json;
using RabbitMQ.Client;
using RabbitMQ.Client.Events;
using System.Text;
using System.Threading.Channels;

namespace MailServices.Infrastructure
{
    public class RabitmqQueue : IQueue
    {
        readonly ConnectionFactory _factory;
        readonly IConnection _connection;
        readonly IModel _model;

        public RabitmqQueue(IOptions<QueueConfig> config)
        {
            _factory = new ConnectionFactory()
            {
             
                HostName = config.Value.HostName,
                Port = config.Value.Port,
                UserName = config.Value.UserName,
                Password = config. Value.Password,
                VirtualHost = config.Value.VirtualHost,
                RequestedConnectionTimeout = TimeSpan.FromSeconds(10), // Set a reasonable timeout
                AutomaticRecoveryEnabled = true, // Enable automatic recovery
                NetworkRecoveryInterval = TimeSpan.FromSeconds(10) 
        };

             _connection = _factory.CreateConnection();
            _model = _connection.CreateModel();
            Initial();
        }

        private void Initial()
        {
            _model.QueueDeclare("MailQueue", true, false, false, null);
            _model.ExchangeDeclare(exchange: "MailQueueExchange", type: ExchangeType.Direct);
            _model.QueueBind("MailQueue", "MailQueueExchange", "directexchange_key");

        }
        public T ConsumerQueue<T>()
        {
            // Lấy một tin nhắn từ hàng đợi, nếu có
            string message= "";
                var result = _model.BasicGet(queue: "MailQueue", autoAck: false);
                if (result != null)
                {
                    var body = result.Body.ToArray();
                    message = Encoding.UTF8.GetString(body);
                    var routingKey = result.RoutingKey;
                    _model.BasicAck(deliveryTag: result.DeliveryTag, multiple: false);
                }
            return string.IsNullOrEmpty(message) ? (T)Activator.CreateInstance(typeof(T)) :  JsonConvert.DeserializeObject<T>(message);
        }

        public void PublisherQueue<T>(T body)
        {
            var properties = _model.CreateBasicProperties();
            properties.Persistent = false;
            byte[] messagebuffer = Encoding.Default.GetBytes(JsonConvert.SerializeObject(body));
            _model.BasicPublish("MailQueueExchange", "directexchange_key", properties, messagebuffer);
        }
    }
}
