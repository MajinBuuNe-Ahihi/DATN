using CAFE.Server.Infrastructure.Interface.Queue;
using Newtonsoft.Json;
using RabbitMQ.Client;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace CAFE.Server.Infrastructure.Queue
{
    internal class RabitmqQueue:IQueue
    {
        readonly ConnectionFactory _factory;
        readonly IConnection _connection;
        readonly IModel _model;

        public RabitmqQueue()
        {
            _factory = new ConnectionFactory()
            {

                HostName = "localhost",
                Port = 1010,
                UserName = "guest",
                Password = "guest",
                VirtualHost = "/",
                RequestedConnectionTimeout = TimeSpan.FromSeconds(10), // Set a reasonable timeout
                AutomaticRecoveryEnabled = true, // Enable automatic recovery
                NetworkRecoveryInterval = TimeSpan.FromSeconds(10)
            };

            _connection = _factory.CreateConnection();
            _model = _connection.CreateModel();
           
        }

     
        public T ConsumerQueue<T>()
        {
            // Lấy một tin nhắn từ hàng đợi, nếu có
            string message = "";
            var result = _model.BasicGet(queue: "MailQueue", autoAck: false);
            if (result != null)
            {
                var body = result.Body.ToArray();
                message = Encoding.UTF8.GetString(body);
                var routingKey = result.RoutingKey;
                _model.BasicAck(deliveryTag: result.DeliveryTag, multiple: false);
            }
            return string.IsNullOrEmpty(message) ? (T)Activator.CreateInstance(typeof(T)) : JsonConvert.DeserializeObject<T>(message);
        }

        public void PublisherQueue<T>(T body,string queue)
        {
            _model.QueueDeclare(queue, true, false, false, null);
            _model.ExchangeDeclare(exchange: $"{queue}Exchange", type: ExchangeType.Direct);
            _model.QueueBind(queue, $"{queue}Exchange", "directexchange_key");
            var properties = _model.CreateBasicProperties();
            properties.Persistent = false;
            byte[] messagebuffer = Encoding.Default.GetBytes(JsonConvert.SerializeObject(body));
            _model.BasicPublish($"{queue}Exchange", "directexchange_key", properties, messagebuffer);
        }
    }
}
