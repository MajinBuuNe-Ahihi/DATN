using Dapper;
using Microsoft.Data.SqlClient;
using RegisterServer.Core.Entity;
using RegisterServer.Core.lib;
using RegisterServer.Infrastructure.interfaces;

namespace RegisterServer.Infrastructure
{
    public class RegisterRepo : BaseRepo, IRepoRegister
    {
        readonly IDatabaseRegister _databaseRegister;
        readonly IDatabase _database;
        private readonly IWebHostEnvironment _env;

        public RegisterRepo(IWebHostEnvironment env,IDatabaseRegister databaseRegister, IDatabase database) : base(database)
        {
            _env = env;
            _databaseRegister = databaseRegister;
            _database = database;
        }
        public bool Active(string codeActive, Guid registerID)
        {
            return false;

        }

        public bool RestoreDB(Register register)
        {
            string webRootPath = _env.WebRootPath;
            // Define the backup file path and the new database name
            string backupFilePath = @$"{webRootPath}\backup\restorefile.bak";
            
            string newDatabaseName = Utilities.RemoveUnicode(register.StoreName.Replace(" ", ""));

            string logicalDataFileName = newDatabaseName;
            string logicalLogFileName = newDatabaseName;

            string newDataFilePath = $@"{webRootPath}\backup\{newDatabaseName}\{newDatabaseName}.mdf";
            string newLogFilePath = $@"{webRootPath}\backup\{newDatabaseName}\{newDatabaseName}.ldf";

            // SQL script to restore the database
            string sqlRestoreScript = $@"
                USE master;
                RESTORE DATABASE  [{newDatabaseName}]
                    FROM DISK = '{backupFilePath}'
               WITH MOVE 'store_db' TO 'C:\Program Files\Microsoft SQL Server\MSSQL16.MSSQLSERVER\MSSQL\DATA\{newDatabaseName}.mdf',
                MOVE 'store_db_log' TO 'C:\Program Files\Microsoft SQL Server\MSSQL16.MSSQLSERVER\MSSQL\DATA\{newDatabaseName}_log.ldf',
                RECOVERY, REPLACE;
                ";

            try
            {
    
                var result = this._databaseRegister.GetConnection().Execute(sqlRestoreScript);
            }
            catch (Exception ex)
            {
                // Handle any errors that may have occurred
                Console.WriteLine("An error occurred: " + ex.Message);
            }
            return true;
        }
    }
}
