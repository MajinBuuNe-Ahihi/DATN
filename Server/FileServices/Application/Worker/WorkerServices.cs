
using FileServices.Application.Interfaces;
using Microsoft.Extensions.DependencyInjection;

namespace FileServices.Application.Worker
{
    public class WorkerServices : IHostedService
    {
        private Timer? _timer = null;
        readonly IServiceScopeFactory _scopeFactory;

        public WorkerServices(IServiceScopeFactory scopeFactory)
        {
            _scopeFactory = scopeFactory;
        }
        public Task StartAsync(CancellationToken cancellationToken)
        {
            _timer = new Timer(
                DoWork,
                null,
                TimeSpan.Zero,
                TimeSpan.FromSeconds(10));
            return Task.CompletedTask;
        }

        private void DoWork(object? state)
        {
            using (var scope = _scopeFactory.CreateScope())
            {
                //var business = scope.ServiceProvider.GetService<IImageBusiness>();
                //if(business != null)
                //{
                //    business.SendMail();
                //}
            }
        }

        public Task StopAsync(CancellationToken cancellationToken)
        {
            _timer?.Change(Timeout.Infinite, 0);

            return Task.CompletedTask;
        }

        public void Dispose()
        {
            _timer?.Dispose();
        }
    }
}
