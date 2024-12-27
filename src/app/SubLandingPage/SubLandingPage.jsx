import NavBar from "../../components/home/Share/NavBar";
import SideHeader from "../../components/home/SideHeader/SideHeader";

const SubLandingPage = () => {
  return (
    <div
      className="min-h-screen  mt-28 relative"
      style={{ backgroundColor: "#F5F4F2" }}
    >
      <NavBar />

      <main className="px-6">
        <div className="flex">
          <aside className="w-1/4 p-4">
            <button className="mb-4 font-bold bg-white text-black hover:bg-black hover:text-white px-2 py-3 rounded transition duration-300 w-48">
              &larr; All restaurants
            </button>

            <div className="flex items-center space-x-2 text-red-500 mb-6">
              <span>🚶</span>
              <span>Out of delivery zone</span>
            </div>
            <div>
              <h2 className="text-lg font-bold mb-2">Menu</h2>
              <ul className="space-y-2">
                <li className="mb-4 font-bold hover:bg-white hover:text-black px-2 py-3 rounded">
                  Whats new
                </li>
                <li className="mb-4 hover:bg-white hover:text-black px-2 py-3 rounded">
                  Соло баскеты
                </li>
                <li className="mb-4 hover:bg-white hover:text-black px-2 py-3 rounded">
                  Комбо баскеты
                </li>
                <li className="mb-4 hover:bg-white hover:text-black px-2 py-3 rounded">
                  Сочная курочка
                </li>
                <li className="mb-4 hover:bg-white hover:text-black px-2 py-3 rounded">
                  Напитки
                </li>
                <li className="mb-4 hover:bg-white hover:text-black px-2 py-3 rounded">
                  Комбо
                </li>
                <li className="mb-4 hover:bg-white hover:text-black px-2 py-3 rounded">
                  Соло баскеты
                </li>
                <li className="mb-4 hover:bg-white hover:text-black px-2 py-3 rounded">
                  Комбо баскеты
                </li>
                <li className="mb-4 hover:bg-white hover:text-black px-2 py-3 rounded">
                  Сочная курочка
                </li>
                <li className="mb-4 hover:bg-white hover:text-black px-2 py-3 rounded">
                  Напитки
                </li>
                <li className="mb-4 hover:bg-white hover:text-black px-2 py-3 rounded">
                  Комбо
                </li>
              </ul>
            </div>
          </aside>

          {/* Main Section */}
          {/* <section className="flex-1 ml-8">
            <div className="relative bg-white shadow-lg rounded-lg">
              <img
                src="https://eda.yandex/images/3378693/049e8232c93c3ce2b19dc94a1da9ba26-1100x825.jpg"
                alt="Restaurant Banner"
                className="w-full h-96 object-cover rounded-t-lg"
              />
              <div className="p-6">
                <h1 className="text-3xl font-bold">
                  KFC Central Stadium - Aktobe
                </h1>
                <div className="flex items-center space-x-4 mt-2">
                  <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm">
                    4.5
                  </span>
                  <span className="text-gray-500">200+ ratings</span>
                </div>
              </div>
            </div>
            <div className="bg-red-100 text-red-500 p-4 rounded-lg mt-6">
              Unfortunately, delivery is unavailable to this address
            </div>
            <div className="bg-green-100 text-green-500 p-4 rounded-lg mt-6">
              Free delivery – on any order
            </div>
          </section> */}

          <SideHeader />
        </div>
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

export default SubLandingPage;
