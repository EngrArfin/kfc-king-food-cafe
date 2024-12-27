import { FaCarSide } from "react-icons/fa";

const Shops = () => {
  // Card data with specific logos and background colors
  const cards = [
    {
      img: "https://eda.yandex/images/2794391/e825606670bd3b19736d48949b95ea1e.png",
      text: "25-45 min",
      bgColor: "bg-sky-500",
    },
    {
      img: "https://eda.yandex/images/3609085/2224ef8c976f325090b4f4f79777f35a.png",
      text: "20-40 min",
      bgColor: "bg-red-700",
    },
    {
      img: "https://eda.yandex/images/3529621/e1ff96ca31f81d06f7833fe683e10dc8.png",
      text: "20-40 min",
      bgColor: "bg-green-800",
    },
    {
      img: "https://eda.yandex/images/3504598/01885f92ee6b1b67b4bdaf51fb369a0d.png",
      text: "15-30 min",
      bgColor: "bg-green-500",
    },
    {
      img: "https://eda.yandex/images/3420935/d19afc374d51704ebc95914e104c2054.png",
      text: "30-50 min",
      bgColor: "bg-purple-800",
    },
    {
      img: "https://eda.yandex/images/3609085/09b7a6300d635f16a3ac40d69f02e38f.png",
      text: "40-60 min",
      bgColor: "bg-red-800",
    },
    {
      img: "https://eda.yandex/images/3439028/faef27f56439fb08cc8d999c2223b6ce.png",
      text: "35-55 min",
      bgColor: "bg-indigo-800",
    },
  ];

  return (
    <div>
      <div className="flex justify-between mt-10">
        <div className="text-3xl font-bold">Shops</div>
        <div>text-3xl</div>
      </div>
      <div className="carousel w-full flex overflow-x-auto space-x-4 py-10 px-2">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`carousel-item flex-none w-60 h-40 rounded-lg shadow-lg relative overflow-hidden hover:shadow-xl transform hover:scale-105 transition duration-200 ease-in-out ${card.bgColor}`}
          >
            {/* Logo */}
            <img
              src={card.img}
              alt="Shop Logo"
              className="w-full h-30 object-contain p-4"
            />

            {/* Delivery Time */}
            <p className=" flex justify-items-end  absolute bottom-1 right-1 px-2 py-2  font-bold text-1xl text-white bg-black bg-opacity-20 rounded-md shadow-sm backdrop-blur-sm">
              <FaCarSide className="mr-2 flex items-center " />
              {card.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shops;
