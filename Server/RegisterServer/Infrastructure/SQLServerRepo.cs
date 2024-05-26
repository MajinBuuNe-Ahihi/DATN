using Microsoft.Data.SqlClient;
using Microsoft.SqlServer.Management.Smo;
using RegisterServer.Infrastructure.interfaces;
using System.Data.Common;

namespace RegisterServer.Infrastructure
{
    public class SQLServerRepo : IDatabase
    {
        readonly SqlConnection _connection;
        public SQLServerRepo(IConfiguration configuration)
        {
            _connection = new SqlConnection(configuration.GetConnectionString("SQLServer"));
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

        ~SQLServerRepo()
        {
            _connection?.Dispose();
        }
    }
}
