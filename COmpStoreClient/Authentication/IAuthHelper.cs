using COmpStore.Models.Entities;
using System.Threading.Tasks;

namespace COmpStoreClient.Authentication
{
    public interface IAuthHelper
    {
        Customer GetCustomerInfo();
        Task<string> CheckPermission(string token);
    }
}