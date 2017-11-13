using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using COmpStoreClient.WebServiceAccess.Base;
using COmpStore.Models.Entities;
using COmpStore.Models.Entities.ViewModels.Base;

namespace COmpStoreClient.Controllers
{ 

    public class ProductsController : Controller
    {
        private readonly IWebApiCalls _webApiCalls;

        public ProductsController(IWebApiCalls webApiCalls)
        {
            _webApiCalls = webApiCalls;
        }
        [HttpGet]
        public async Task<IActionResult> Index()
        {
        IList<ProductAndSubCategoryBase> prods;
        prods = await _webApiCalls.GetFeaturedProductsAsync();
            return View(prods);
        }
    }
}