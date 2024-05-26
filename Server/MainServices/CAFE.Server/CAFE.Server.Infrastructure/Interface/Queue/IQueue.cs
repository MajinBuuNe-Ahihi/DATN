using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CAFE.Server.Infrastructure.Interface.Queue
{
    public interface IQueue
    {
        public void PublisherQueue<T>(T body,string queue);
        public T ConsumerQueue<T>();
    }

}
