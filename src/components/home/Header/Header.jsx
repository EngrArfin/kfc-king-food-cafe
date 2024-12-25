const Header = () => {
  return (
    <section className="flex-1 ml-8">
      <div className="relative bg-white shadow-lg rounded-lg">
        <img
          src="https://eda.yandex/images/3378693/049e8232c93c3ce2b19dc94a1da9ba26-1100x825.jpg"
          alt="Restaurant Banner"
          className="w-full h-96 object-cover rounded-t-lg"
        />
        <div className="p-6">
          <h1 className="text-3xl font-bold">KFC Central Stadium - Aktobe</h1>
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
    </section>
  );
};

export default Header;
