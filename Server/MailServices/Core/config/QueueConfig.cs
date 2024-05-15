﻿using Microsoft.Extensions.Configuration;

namespace MailServices.Core.config
{
    public class QueueConfig
    {
       public string HostName { get; set; }
        public int Port { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public string VirtualHost { get; set; }
    }
}