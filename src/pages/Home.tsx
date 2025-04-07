import Hero from "../components/Hero";
import FeaturedProducts from "../components/FeaturedProducts";
import CategorySection from "../components/CategorySection";

const Home = () => {
  return (
    <div>
      <Hero />
      <FeaturedProducts />
      <CategorySection />

      <section className="py-12 bg-emerald-700 text-white">
        <div className="container-custom text-center mx-2">
          <h2 className="text-3xl font-bold mb-4">Join Our Newsletter</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive updates on new arrivals,
            special offers, and exclusive discounts.
          </p>
          <div className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-2 rounded-l-md text-gray-900 focus:outline-none"
            />
            <button className="bg-gray-900 hover:bg-gray-800 px-6 py-2 rounded-r-md">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
