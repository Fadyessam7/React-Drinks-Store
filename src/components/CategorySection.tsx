import { Link } from "react-router-dom";
import { Coffee, CoffeeIcon } from "lucide-react"; // تأكد من استيراد الأيقونات المناسبة

const CategorySection = () => {
  const categories = [
    {
      name: "Fruit Juices",
      description: "Explore a variety of refreshing fruit juices like mango, guava, and pomegranate.",
      icon: <CoffeeIcon className="h-10 w-10" />,
      link: "/products?category=fruit-juices",
      color: "bg-orange-100 text-orange-700",
    },
    {
      name: "Soft Drinks",
      description: "Discover popular soft drinks such as Coca-Cola, Pepsi, and Sprite.",
      icon: <Coffee className="h-10 w-10" />,
      link: "/products?category=soft-drinks",
      color: "bg-blue-100 text-blue-700",
    },
    {
      name: "Sparkling Water",
      description: "A selection of sparkling waters for a refreshing experience.",
      icon: <Coffee className="h-10 w-10" />,
      link: "/products?category=sparkling-water",
      color: "bg-green-100 text-green-700",
    },
    {
      name: "Egyptian Specialties",
      description: "Taste traditional Egyptian beverages like Karkadeh and Sahlab.",
      icon: <Coffee className="h-10 w-10" />,
      link: "/products?category=egyptian-specialties",
      color: "bg-red-100 text-red-700",
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container-custom">
        <h2 className="text-2xl font-bold text-center mb-10">
          Shop by Category
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-7">
          {categories.map((category, index) => (
            <Link
              key={index}
              to={category.link}
              className="bg-white rounded-lg shadow-md p-6 transition-transform hover:scale-[1.03]"
            >
              <div
                className={`rounded-full p-3 inline-block mb-4 ${category.color}`}
              >
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
              <p className="text-gray-600 mb-4">{category.description}</p>
              <span className="text-emerald-600 font-medium flex items-center">
                Shop Now
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
