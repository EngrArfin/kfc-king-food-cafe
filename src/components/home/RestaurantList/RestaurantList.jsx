import { FaRegBookmark } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import { Link } from "react-router-dom";

const RestaurantList = () => {
  // Data for the restaurants
  const restaurants = [
    {
      img: "https://eda.yandex/images/3512182/a1d2068c9b1e7f28b9210a56c8d55db1-648x312.jpg",
      title: "Burger King",
      rating: 4.9,
      time: "25-35 min",
      isTopRestaurant: true,
      hasFreeDelivery: true,
    },
    {
      img: "https://eda.yandex/images/1463280/0c2560a641db49ccb730d8a430b619ba-648x312.jpg",
      title: "McDonald's",
      rating: 4.8,
      time: "20-30 min",
      isTopRestaurant: true,
      hasFreeDelivery: true,
    },
    {
      img: "https://eda.yandex/images/3709189/b8ccc4b8b96de76f32cea0cd7d83650b-648x312.jpeg",
      title: "KFC",
      rating: 4.7,
      time: "30-40 min",
      isTopRestaurant: true,
      hasFreeDelivery: true,
    },
    {
      img: "https://eda.yandex/images/3569651/074508fd4b8210802be74c3819e52333-648x312.jpg",
      title: "Subway",
      rating: 4.5,
      time: "15-25 min",
      isTopRestaurant: true,
      hasFreeDelivery: true,
    },
  ];

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6">Restaurants</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {restaurants.map((restaurant, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition duration-200"
          >
            {/* Bookmark Icon */}
            <p className="absolute top-2 right-2 px-2 py-2 text-xl text-white bg-black bg-opacity-20 rounded-md shadow-sm backdrop-blur-sm">
              <FaRegBookmark />
            </p>
            <img
              src={restaurant.img}
              alt={restaurant.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <div className="flex justify-between">
                <h2 className="text-xl font-bold mb-2">{restaurant.title}</h2>
                <p className="flex items-center text-gray-600 mb-1">
                  <IoIosStar className=" mr-2" />
                  {restaurant.rating}
                </p>
              </div>
              <p className="text-gray-600 mb-1">{restaurant.time}</p>
              {restaurant.isTopRestaurant && (
                <span className="inline-block bg-blue-500 text-white text-xs font-semibold rounded-full px-2 py-1 mr-1">
                  Top Restaurant
                </span>
              )}
              {restaurant.hasFreeDelivery && (
                <span className="inline-block bg-green-500 text-white text-xs font-semibold rounded-full px-2 py-1">
                  Free Delivery
                </span>
              )}
              <Link
                to="/allProductView"
                className="mt-4 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold py-2 px-4 rounded"
              >
                Order Now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantList;
