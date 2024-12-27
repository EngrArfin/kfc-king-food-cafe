import ProductHighlighted from "../../components/home/ProductHighlighted/ProductHighlighted";
import ProductOffer from "../../components/home/ProductOffer/Productoffer";
import RestaurantList from "../../components/home/RestaurantList/RestaurantList";
import NavBar from "../../components/home/Share/NavBar";
import Shops from "../../components/home/Shops/Shops";

const LandingPage = () => {
  return (
    <div
      className="min-h-screen  mt-10 relative"
      style={{ backgroundColor: "#F5F4F2" }}
    >
      <NavBar />

      <main className="px-6 ">
        {/* Main Section */}

        <Shops />
        <ProductOffer />
        <ProductHighlighted />
        <RestaurantList />
      </main>

      {/* Floating Chat Button */}
      <button
        className="fixed left-4 bottom-6 bg-yellow-500 text-black p-4 rounded-full shadow-lg shadow-black hover:bg-yellow-600"
        onClick={() => alert("Chat functionality coming soon!")}
      >
        <p className="text-black">💬</p>
      </button>
    </div>
  );
};

export default LandingPage;
