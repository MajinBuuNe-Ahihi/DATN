namespace CAFE.Server.Library.Services.Interfaces
{
    internal interface ITypeServices
    {
       
        TDes MapData<TDes>(object obj);

        object MapData(object obh, Type destype);

        T CreateInstance<T>();
    }
}
