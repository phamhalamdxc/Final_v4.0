using COmpStore.Models.Entities.Base;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace COmpStore.Models.ViewModels.Base
{
    public class ProductAndPublisherBase : EntityBase
    {
        public int PublisherId { get; set; }
        [Display(Name = "PublisherName")]
        public string PublisherName { get; set; }
        //public int SubCategoryId { get; set; }
        [Display(Name = "ProductName")]
        public string ProductName { get; set; }
    }
}
