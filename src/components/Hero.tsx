import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative bg-gray-900 text-white">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{
          backgroundImage: "url('/placeholder.svg?height=600&width=1200')",
        }}
      ></div>

      <div className="container-custom relative z-10 py-20 md:py-32 ml-4">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Premium Drinks for Every Occasion
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Discover our curated selection of fine wines, craft beers, premium
            spirits, and refreshing non-alcoholic beverages.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/products"
              className="btn btn-primary text-center p-3 hover:bg-white hover:text-black hover:rounded-2xl"
            >
              Shop Now
            </Link>
            <Link
              to="/products?category=featured"
              className="btn bg-white rounded-2xl p-3 text-gray-900 hover:bg-gray-100 text-center"
            >
              View Featured
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
