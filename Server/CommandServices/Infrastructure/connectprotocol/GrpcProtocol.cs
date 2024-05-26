using System.Threading.Channels;
using System.Threading.Tasks;
using Grpc.Net.Client;
using CommandServices;
using CommandServices.Domain.Config;
using CommandServices.Library;

namespace CommandServices.Infrastructure.connectprotocol
{
    public class GrpcProtocol
    {
         GrpcChannel _channel;
         GrpcChannel _client;
        readonly GrpcConfig _grpcConfig;
        public GrpcProtocol(GrpcConfig grpcConfig)
        {
            _grpcConfig = grpcConfig;
        }
        private void initProtocol()
        {
            _channel = GrpcChannel.ForAddress(Utilities.BuildConnection(_grpcConfig.Protocol,_grpcConfig.Host,_grpcConfig.Port));
          
        }

        public object Subcirble<T>()
        {
            return null;
        }

        public bool Pushlish<T>(T data)
        {
            return true;
        }
        // The port number must match the port of the gRPC server.
        //using var channel = GrpcChannel.ForAddress("https://localhost:7042");
        //var client = new Greeter.GreeterClient(channel);
        //    var reply = await client.SayHelloAsync(
        //                      new HelloRequest { Name = "GreeterClient" });
        //    Console.WriteLine("Greeting: " + reply.Message);
        //Console.WriteLine("Press any key to exit...");
        //Console.ReadKey();
    }
}
