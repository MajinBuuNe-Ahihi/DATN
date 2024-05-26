using Microsoft.SqlServer.Management.Smo;
using System.Data.Common;

namespace FileServices.Core.Interfaces
{
    public interface IDatabase
    {
        /// <summary>
        ///  mở kết nối db
        /// </summary>
        public void Open();

        /// <summary>
        ///  đóng kết nối db
        /// </summary>
        public void Close();

        /// <summary>
        ///  trả về đối tượng db đã kết nối'
        /// </summary>
        /// <returns></returns>
        public DbConnection GetConnection();

        public List<StoredProcedureParameter> AssignParamsProc(string proc);

    }
}
