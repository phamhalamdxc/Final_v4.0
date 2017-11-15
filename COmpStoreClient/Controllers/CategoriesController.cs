using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using COmpStoreClient.WebServiceAccess.Base;

namespace COmpStoreClient.Controllers
{
    public class CategoriesController : Controller
    {
        private readonly IWebApiCalls _webApiCalls;

        public CategoriesController(IWebApiCalls webApiCalls)
        {
            _webApiCalls = webApiCalls;
        }

      
    }
}