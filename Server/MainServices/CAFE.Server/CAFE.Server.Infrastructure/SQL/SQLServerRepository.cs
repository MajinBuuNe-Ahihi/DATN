
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using Microsoft.SqlServer.Management.Smo;
using System.Data.Common;

namespace CAFE.Server.Infrastructure
{
    public class SQLServerRepository : IDatabase
    {
        readonly SqlConnection _connection;
        public SQLServerRepository(IConfiguration configuration)
        {
            _connection = new SqlConnection(configuration.GetConnectionString("SQLServer2"));
        }
        public void Close()
        {
            _connection.Close();
        }

        public DbConnection GetConnection()
        {
            return _connection;
        }

        public void Open()
        {
            _connection.Open();
        }

        public List<StoredProcedureParameter> AssignParamsProc(string proc, IDatabase database)
        {
            throw new NotImplementedException();
        }

        ~SQLServerRepository()
        {
            _connection?.Dispose();
        }
    }
}
