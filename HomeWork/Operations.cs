using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Homework
{
    class Operations
    {
        public static string OperationList()
        {
            Console.WriteLine("1.Add product");
            Console.WriteLine("2.Add category");
            Console.WriteLine("3.Show products");
            Console.WriteLine("4.Show categories");
            Console.WriteLine("5.Show products (Name and Price) list in single category");
            Console.WriteLine("6.Show single product");
            Console.WriteLine("7.Order product by date");
            Console.WriteLine("8.Order product by price");
            Console.WriteLine("**************************");
            Console.WriteLine("Choose your option : ");
            string choose = Console.ReadLine();
            return choose;

        }

        public static void ExecuteOperations()
        {
            var operation = OperationList();
            switch (operation)
            {
                case "1":
                    AddProduct(CreateProduct());

                    break;
                case "2":
                    AddCategory(CreateCategory());

                    break;
                case "3":
                    ShowAllProducts();
                    break;

                case "4":
                    ShowAllCategories();
                    break;

                case "6":
                    Console.WriteLine("Product Id-sini daxil edin");
                    
                    ShowProduct(Convert.ToInt32(Console.ReadLine()));
                    break;
                default:
                    break;

            }
            ExecuteOperations();

        }


        public static ProductCategory CreateCategory()
        {
            Console.WriteLine("Enter category name : ");
            string categoryName = Console.ReadLine();
            return new ProductCategory(categoryName);

        }

        public static void AddCategory(ProductCategory category)
        {
            Database.categories.Add(category);
        }
        public static void ShowAllCategories()
        {
            foreach (var item in Database.categories)
            {
                Console.WriteLine(item.ToString());
            }
        }
        public static Product CreateProduct()
        {
            Console.WriteLine("Enter product name : ");
            string productName = Console.ReadLine();
            Console.WriteLine("Enter product price : ");
            int productPrice = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine(" product date time :");
            DateTime productAddDate = DateTime.Now;
            return new Product(productName,productPrice,productAddDate);

        }
        public static void AddProduct(Product product)
        {
            Database.products.Add(product);
        }
        public static void ShowAllProducts()
        {
            foreach(var item in Database.products)
            {
                Console.WriteLine(item.ToString());
            }
        }
        public static void ShowProduct(int id)
        {
            foreach(var product in Database.products)
            {
                if (id == product.ProductId)
                {
                    Console.WriteLine(product);
                }
            }
        }

    }
}
