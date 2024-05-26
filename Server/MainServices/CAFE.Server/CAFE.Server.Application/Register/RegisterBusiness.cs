using AutoMapper;
using CAFE.Server.Application.Interface.Register;
using CAFE.Server.Application.Modal;
using CAFE.Server.Core.Entity;
using CAFE.Server.Infrastructure.Interface.Queue;
using CAFE.Server.Infrastructure.Interface.Repo;
using System.Net.Http.Headers;
using System.Net.Http.Json;

namespace CAFE.Server.Application.Register
{
    public class RegisterBusiness : IRegisterBusiness
    {
        readonly IRegisterRepo _registerRepo;
        readonly IQueue _queue;
        private readonly IMapper _mapper;

        public RegisterBusiness(IRegisterRepo registerRepo, IQueue queue, IMapper mapper)
        {
            _registerRepo = registerRepo;
            _mapper = mapper;
            _queue = queue;
        }

        public bool ActiveStore(string active, Guid registerID)
        {
            return _registerRepo.Active(active, registerID);
        }

        public async Task Register(RegisterModal business)
        {
            try
            {
                CAFE.Server.Core.Entity.Register register = new CAFE.Server.Core.Entity.Register();
                 register = _mapper.Map< CAFE.Server.Core.Entity.Register>(business);
                register.VerifiedCode = new Random().Next(100000, 1000000).ToString();

                var mail = new MailEntity
                {
                    Name = register.StoreName,
                    Subject = "Mã xác nhận",
                    Body = register.VerifiedCode,
                    To = register.Email,
                    From = "hvmanh@gmail.com"
                };

                HttpClient client = new HttpClient();
                
                _queue.PublisherQueue<MailEntity>(mail, "MailQueue");
                register.RegisterID = Guid.NewGuid();
                register.EditMode = Core.Enum.EnumEditMode.Add;
                register.CreatedDate  = DateTime.Now;
                register.CreatedBy = "hvmanh";
                register.ModifiedDate = DateTime.Now;
                register.ModifiedBy = "hvmanh";
                _registerRepo.Submit(register);

            }
            catch (Exception ex)
            {

            }
        }
    }
}
