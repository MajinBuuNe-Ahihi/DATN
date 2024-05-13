using CommandServices.Domain.Interfaces.Infrastructure;
using Grpc.Core;

namespace CommandServices.Application.Publish
{
    public class PublishServices: CommandServicesProtocol.CommandServicesProtocolBase
    {
        private readonly ICommandRepo _repository;
        public PublishServices(ICommandRepo commandRepo)   
        {
            _repository = commandRepo;
        }
         
        
    }
}
