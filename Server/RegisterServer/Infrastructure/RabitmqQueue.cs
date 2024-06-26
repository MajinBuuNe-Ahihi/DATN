﻿using Newtonsoft.Json;
using RabbitMQ.Client;
using RegisterServer.Infrastructure.interfaces;
using System.Text;

namespace RegisterServer.Infrastructure
{
    public class RabitmqQueue : IQueue
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
            Initial();
        }

        private void Initial()
        {
            //_model.QueueDeclare("RegisterQueue", true, false, false, null);
            //_model.ExchangeDeclare(exchange: "RegisterQueueExchange", type: ExchangeType.Direct);
            //_model.QueueBind("RegisterQueue", "RegisterQueueExchange", "registerdirect_key");

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

        public void PublisherQueue<T>(T body, string queue, string key)
        {

            if (queue == "MailQueue")
            {
                _model.QueueDeclare(queue, true, false, false, null);
                _model.ExchangeDeclare(exchange: $"{queue}Exchange", type: ExchangeType.Direct);
                _model.QueueBind(queue, $"{queue}Exchange", key);
            }
            var properties = _model.CreateBasicProperties();
            properties.Persistent = false;
            byte[] messagebuffer = Encoding.Default.GetBytes(JsonConvert.SerializeObject(body));
            _model.BasicPublish($"{queue}Exchange", key, properties, messagebuffer);
        }
    }
}

