using Dapper;
using FileServices.Core.Entity.@interface;
using FileServices.Core.Interfaces;
using FileServices.Core.lib;
using Microsoft.Data.SqlClient;
using Microsoft.SqlServer.Management.Smo;
using System.Data.Common;

namespace FileServices.Infrastructure
{
    public class BaseRepo:IBaseRepo
    {
        IDatabase _database;

        public BaseRepo(IDatabase database)
        {
            _database = database;

        }

        public T GetByID<T>(Guid id)
        {
            var nameTable = typeof(T).Name;
            DynamicParameters dynamicParameters = new DynamicParameters();
            dynamicParameters.Add("@ID", id, dbType: System.Data.DbType.Guid);
            return _database.GetConnection().QueryFirstOrDefault<T>($"select * from {nameTable} where {FirstCharToLower(nameTable)}ID = @ID", param: dynamicParameters, commandType: System.Data.CommandType.Text);
        }
  

        public  bool Submit<T>(IBaseEntity<T> item)
        {
            var isSuccess = false;
            _database.Open();
            // lấy thực hiện tạo transaction
            var trans = _database.GetConnection().BeginTransaction();
            try
            {
                // goi submit có submit
                isSuccess = Submit(item, trans);
                // kết thúc thì đóng transaction
                trans.Commit();
            }
            catch (Exception ex)
            {
                isSuccess = false;
                trans.Rollback();

            }
            finally { trans.Dispose(); }

            return isSuccess;
        }
        public bool Submit<T>(IBaseEntity<T> item, DbTransaction ts)
        {
            var result = 0;
            try
            {
                // lấy thông tin của item
                var name = (item).GetType().Name;
                var proc = Utilities.GenNameProcede(name, item.EditMode);
                var listVaribleProc = this.AssignParamsProc(proc, ts);
                DynamicParameters dynamicParameters = new DynamicParameters();

                listVaribleProc.ForEach(i =>
                {

                    var info = item.GetType().GetProperty(FirstCharToUpper(i.Name));
                    var value = info.GetValue(item, null);
                    dynamicParameters.Add(i.Name, value);

                });

                if (dynamicParameters != null)
                {
                    result = this._database.GetConnection().Execute(proc, dynamicParameters, commandType: System.Data.CommandType.StoredProcedure, transaction: ts);
                }
                if (result > 0 && item.UpdateScoped != null && item.UpdateScoped.Count > 0)
                {
                    item.UpdateScoped.ForEach(i => Submit((IBaseEntity<T>)i, ts));
                }
            }
            catch (Exception ex)
            {

            }
            return result > 0;
        }
        private List<StoredProcedureParameter> AssignParamsProc(string proc, DbTransaction ts)
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

            using (SqlCommand command = new SqlCommand(query, (SqlConnection)_database.GetConnection(), (SqlTransaction)ts))
            {

                command.Parameters.AddWithValue("@ProcedureName", proc);

                using (SqlDataReader reader = command.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        var parameter = new StoredProcedureParameter
                        {
                            Name = reader["ParameterName"].ToString(),
                        };

                        parameters.Add(parameter);
                    }
                }
            }

            return parameters;
        }

        private string FirstCharToUpper(string input)
        {
            if (String.IsNullOrEmpty(input))
                throw new ArgumentException("ARGH!");
            return input[1].ToString().ToUpper() + String.Join("", input.Skip(2));
        }

        private string FirstCharToLower(string input)
        {
            if (String.IsNullOrEmpty(input))
                throw new ArgumentException("ARGH!");
            return input[0].ToString().ToLower() + String.Join("", input.Skip(1));
        }

       
    }
}
