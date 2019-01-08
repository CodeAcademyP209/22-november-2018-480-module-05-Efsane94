using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Homework
{
    class Product
    {
        static int id = 1;
        public int ProductId { get; set; }
        public string ProductName { get; set; }
        public int ProductPrice { get; set; }
        //public ProductCategory Category { get; set; }
        public DateTime ProductAddDate { get; set; }

        public Product(string name, int price, DateTime date)
        {
            ProductId = id;
            ProductName = name;
            ProductPrice = price;
            ProductAddDate = date;
            id++;

        }
        public override string ToString()
        {
            return String.Format("Id: {0}, Name: {1} ,Price : {2}, AddDate: {3}", ProductId, ProductName,ProductPrice,ProductAddDate);
        }
    }
}