using FileServices.Core.Entity.@interface;
using FileServices.Core.Interfaces;
using Microsoft.Data.SqlClient;
using Microsoft.SqlServer.Management.Smo;
using SixLabors.ImageSharp;
using System.Data.Common;

namespace FileServices.Infrastructure
{
    public class SQLServerRepository : IDatabase
    {
        readonly SqlConnection _connection;
        public SQLServerRepository(IConfiguration configuration)
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

        public List<StoredProcedureParameter> AssignParamsProc( string proc)
        {

            var parameters = new List<StoredProcedureParameter>();
            string query = @"
                SELECT 
                    p.name AS ParameterName,
                    t.name AS DataType,
                    p.max_length AS MaxLength,
                    p.precision,
                    p.scale,
                    p.is_output AS IsOutput
                FROM 
                    sys.parameters p
                INNER JOIN 
                    sys.procedures sp ON p.object_id = sp.object_id
                INNER JOIN 
                    sys.types t ON p.user_type_id = t.user_type_id
                WHERE 
                    sp.name = @ProcedureName
                ORDER BY 
                    p.parameter_id;"
            ;

            using (SqlCommand command = new SqlCommand(query, _connection))
            {
                command.Parameters.AddWithValue("@ProcedureName", proc);

                using (SqlDataReader reader = command.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        var parameter = new StoredProcedureParameter
                        {
                            Name = reader["ParameterName"].ToString(),
                            DataType = (DataType)reader["DataType"],
                            IsOutputParameter = (bool)reader["IsOutput"],   
                            
                        };

                        parameters.Add(parameter);
                    }
                }
            }

            return parameters;
        }

        public void Open()
        {
            _connection.Open();
        }
        ~SQLServerRepository()
        {
            _connection?.Dispose();
        }
    }
}
