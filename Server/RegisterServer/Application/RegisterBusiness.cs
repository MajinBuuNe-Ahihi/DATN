using RegisterServer.Application.interfaces;
using RegisterServer.Core.Entity;
using RegisterServer.Infrastructure.interfaces;

namespace RegisterServer.Application
{
    public class RegisterBusiness : IRegisterBusiness
    {
        IQueue _queue;
        IRepoRegister _repoRegister;
        public RegisterBusiness(IQueue queue, IRepoRegister repoRegister)
        {
            _queue = queue;
            _repoRegister = repoRegister;
        }

        public bool ActiveStore(string active, Guid registerID)
        {
            try
            {
                if(string.IsNullOrEmpty(active) || registerID == Guid.Empty)
                {
                    return false;
                }
                // xem co cung active hay k
                var register = this._repoRegister.GetByID<Register>(registerID);
                if (register == null || active != register.VerifiedCode) return true;
                //// restore db
                var result = this._repoRegister.RestoreDB(register);
                // sinh iis

                // thong bao thanh cong
                var mail = new MailEntity
                {
                    Name = register.StoreName,
                    Subject = "Chúc mừng bạn đã đăng kí thành công trở thành địa điểm mới của hệ thống cafechill",
                    Body = "Vui lòng truy cập: trang để xem ............, và vào ... để quản lý",
                    To = register.Email,
                    From = "hvmanh@gmail.com"
                };

                _queue.PublisherQueue<Register>(register, "RegisterQueue", "registerdirect_key");
                _queue.PublisherQueue<MailEntity>(mail, "MailQueue", "directexchange_key");

                return true;

            }catch (Exception ex)
            {
                return false;
            }
        }

        public async Task Register(Register business)
        {
            try
            {
                business.VerifiedCode = new Random().Next(100000, 1000000).ToString();

                business.RegisterID = Guid.NewGuid();
                business.EditMode = Core.Enum.EnumEditMode.Add;
                business.CreatedDate = DateTime.Now;
                business.CreatedBy = "hvmanh";
                business.ModifiedDate = DateTime.Now;
                business.ModifiedBy = "hvmanh";
              var result =   _repoRegister.Submit(business);
                if(result)
                {
                    var mail = new MailEntity
                    {
                        Name = business.StoreName,
                        Subject = "Mã xác nhận",
                        Body = business.VerifiedCode,
                        To = business.Email,
                        From = "hvmanh@gmail.com"
                    };

                    _queue.PublisherQueue<MailEntity>(mail, "MailQueue","directexchange_key");
                }

            }
            catch (Exception ex)
            {

            }
        }
    }
}
