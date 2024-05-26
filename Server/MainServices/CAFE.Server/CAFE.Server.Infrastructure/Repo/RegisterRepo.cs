using CAFE.Server.Core;
using CAFE.Server.Core.Entity;
using CAFE.Server.Core.Library;
using CAFE.Server.Infrastructure.Interface.Repo;
using Dapper;
using Microsoft.Data.SqlClient;
using Microsoft.SqlServer.Management.Smo;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CAFE.Server.Infrastructure.Repo
{
    public class RegisterRepo : BaseRepo, IRegisterRepo
    {
        readonly IDatabase _database;
        public RegisterRepo(IDatabase database) : base(database)
        {
            _database = database;
        }

        public bool Active(string codeActive, Guid registerID)
        {
            string commandText = "select * from register where registerID = @register";
            var dynamicParams = new DynamicParameters();
            dynamicParams.Add("@register", registerID);
            var result = _database.GetConnection().QueryFirstOrDefault<Register>(commandText, dynamicParams, commandType: CommandType.Text);
            if(result.VerifiedCode != codeActive)
            {
                return false;
            }
            else
            {
                // Define the connection string to the SQL Server
                string connectionString = "Server=HVMANH;User Id=sa;Password=123456;TrustServerCertificate=true;";

            // Define the backup file path and the new database name
                string backupFilePath = @"C:\Users\g\3D Objects\DATN\Server\MainServices\CAFE.Server\CAFE.Server.Infrastructure\backup\filebackup.bak";
                string newDatabaseName = Utilities.RemoveUnicode( result.StoreName.Replace(" ",""));

                // Define the logical names of the data and log files (these should be obtained from the backup)
                string logicalDataFileName = newDatabaseName;
                string logicalLogFileName = newDatabaseName;

                // Define the new file paths for the restored database files
                string newDataFilePath = $@"C:\Users\g\3D Objects\DATN\Server\MainServices\CAFE.Server\CAFE.Server.Infrastructure\backup\{newDatabaseName}.mdf";
                string newLogFilePath = $@"C:\Users\g\3D Objects\DATN\Server\MainServices\CAFE.Server\CAFE.Server.Infrastructure\backup\{newDatabaseName}.ldf";

                // SQL script to restore the database
                string sqlRestoreScript = $@"
                RESTORE DATABASE [{newDatabaseName}]
                FROM DISK = '{backupFilePath}'
                WITH MOVE '{logicalDataFileName}' TO '{newDataFilePath}',
                     MOVE '{logicalLogFileName}' TO '{newLogFilePath}',
                     RECOVERY, REPLACE;";

                try
                {
                    // Establish the connection to SQL Server
                    using (SqlConnection connection = new SqlConnection(connectionString))
                    {
                        // Open the connection
                        connection.Open();

                        // Create the SQL command
                        using (SqlCommand command = new SqlCommand(sqlRestoreScript, connection))
                        {
                            // Execute the restore command
                            command.ExecuteNonQuery();
                            Console.WriteLine("Database restored successfully.");
                        }
                    }
                }
                catch (Exception ex)
                {
                    // Handle any errors that may have occurred
                    Console.WriteLine("An error occurred: " + ex.Message);
                }
            }
            return true;
        }

        public override bool Submit<T>(IBaseEntity<T> item)
        {
            var result = base.Submit(item);
            return true;
        }

      

    }
}
