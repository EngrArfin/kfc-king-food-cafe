import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaRegBookmark } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";

const ProductOffer = () => {
  const products = [
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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-screen-xl mx-auto py-6">
      <div className="flex justify-between mb-6">
        <h1 className="text-3xl font-bold">Shops</h1>
        <h2 className="text-xl font-semibold">Browse Offers</h2>
      </div>
      <Slider {...settings}>
        {products.map((product, index) => (
          <div key={index} className="p-4">
            <div
              className="relative bg-white shadow-lg rounded-md overflow-hidden"
              style={{
                backgroundColor: "#F5F4F2",
                height: "300px", // Decreased height for a smaller card
                width: "100%",
              }}
            >
              {/* Bookmark Icon */}
              <p className="absolute top-2 right-2 px-2 py-2 text-xl text-white bg-black bg-opacity-20 rounded-md shadow-sm backdrop-blur-sm">
                <FaRegBookmark />
              </p>
              {/* Product Image */}
              <figure>
                <img
                  src={product.img}
                  alt={product.title}
                  className="w-full h-40 object-cover rounded-t-md"
                />
              </figure>
              {/* Card Content */}
              <div className="p-3">
                {" "}
                {/* Reduced padding to make it smaller */}
                {/* Title and Rating */}
                <h2 className="text-lg font-bold flex justify-between items-center">
                  {product.title}
                  <div className="text-black flex items-center px-2 py-1 rounded">
                    <IoIosStar className="mr-1" /> {product.rating}
                  </div>
                </h2>
                {/* Delivery Time */}
                <p className="text-sm text-gray-600 mt-2">{product.time}</p>
                {/* Tags */}
                <div className="mt-2 flex space-x-2">
                  {" "}
                  {/* Reduced space for tags */}
                  {product.isTopRestaurant && (
                    <div className="text-sky-400 bg-black bg-opacity-20 rounded shadow-sm px-2 py-1 text-sm">
                      Top Restaurant
                    </div>
                  )}
                  {product.hasFreeDelivery && (
                    <div className="text-green-600 bg-black bg-opacity-20 rounded shadow-sm px-2 py-1 text-sm">
                      Free Delivery
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductOffer;
