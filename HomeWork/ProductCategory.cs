using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Homework
{
    class ProductCategory
    {
        static int id = 1;
        public int CategoryId { get; set; }
        public string CategoryName { get; set; }

        public ProductCategory(string name)
        {
            CategoryId = id;
            CategoryName = name;
            id++;
        }
        public override string ToString()
        {
            return String.Format("Id: {0}, Name: {1} ", CategoryId, CategoryName);
        }
    }
}
