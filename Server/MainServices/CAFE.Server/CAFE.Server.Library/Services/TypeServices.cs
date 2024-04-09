using CAFE.Server.Library.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CAFE.Server.Library.Services
{
    internal class TypeServices : ITypeServices
    {
        public T CreateInstance<T>()
        {
            return Activator.CreateInstance<T>();
        }

        public TDes MapData<TDes>(object obj)
        {
            return (TDes)this.MapData(obj, typeof(TDes));
        }

        public object MapData(object obj, Type destype)
        {
            if (obj == null || destype == null)
            {
                return null;
            }

            var des = Activator.CreateInstance(destype);
            var prsOrigin = obj.GetType().GetProperties();
            var prsDes = obj.GetType().GetProperties();

            foreach ( var p in prsOrigin)
            {
                var prd = prsDes.FirstOrDefault(n => n.Name ==  p.Name);
                if (prd != null && prd.GetType().Name == p.GetType().Name )
                {
                    prd.SetValue(des, p.GetValue(obj));
                }
            }

            return des;
        }
    }
}
