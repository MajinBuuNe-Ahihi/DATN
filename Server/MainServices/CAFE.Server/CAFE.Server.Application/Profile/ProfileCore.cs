using AutoMapper;
using CAFE.Server.Application.Modal;
using CAFE.Server.Core.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CAFE.Server.Application.Profile
{
    public class ProfileCore : AutoMapper.Profile
    {
        public ProfileCore()
        {
            CreateMap<CAFE.Server.Core.Entity.Register, RegisterModal>();
            CreateMap<RegisterModal, CAFE.Server.Core.Entity.Register>();
        }

    }
}
