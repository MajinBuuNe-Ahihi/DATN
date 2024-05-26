
namespace CommandServices.Domain.Config
{
    public class GrpcConfig
    {
        readonly IConfigurationSection _configurationSection;
        public string Host
        {
            get
            {
                return _configurationSection.GetValue<string>("Host");
            }
        }
        public int Port { 
            get
            { 
                return _configurationSection.GetValue<int>("Port");
            }
        }
        public string Protocol { 
            get 
            { 
                return _configurationSection.GetValue<string>("Protocol"); 
            } 
        }

        public GrpcConfig(IConfigurationSection configurationSection)
        {
            _configurationSection = configurationSection;
        }

    }
}
