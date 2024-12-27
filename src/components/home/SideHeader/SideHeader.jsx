import { BsExclamationCircle, BsExclamationOctagonFill } from "react-icons/bs";
import { GrGift } from "react-icons/gr";
import { MdStar } from "react-icons/md";

const SideHeader = () => {
  return (
    <section className="flex-1 ml-8" style={{ backgroundColor: "#F5F4F2" }}>
      <div className="relative bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Image */}
        <img
          src="https://eda.yandex/images/3378693/049e8232c93c3ce2b19dc94a1da9ba26-1100x825.jpg"
          alt="Restaurant Banner"
          className="w-full h-96 object-cover rounded-t-lg"
        />

        {/* Gradient Overlay on Left Side */}
        <div
          className="absolute inset-0 rounded-t-lg"
          style={{
            background:
              "linear-gradient(to right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0) 50%)",
          }}
        ></div>

        {/* Text Overlay Positioned Bottom Left */}
        <div className="absolute bottom-4 left-4 text-white z-10">
          <h1 className="text-5xl font-bold drop-shadow-md">
            KFC Central Stadium - Aktobe
          </h1>
          <div className="flex items-center space-x-4 mt-2">
            {/* Rating */}
            <span className="flex items-center bg-white bg-opacity-90 px-4 py-2 rounded-lg shadow-lg text-black">
              <MdStar className="text-black-500 text-3xl" />
              <div className="ml-3">
                <p className="text-xl font-bold">4.6</p>
                <p className="text-sm text-gray-600">200+</p>
              </div>
            </span>

            {/* Icon */}
            <span className="bg-white bg-opacity-90 p-3 rounded-lg shadow-lg text-black text-2xl py-4 px-4">
              <BsExclamationCircle />
            </span>
          </div>
        </div>
      </div>

      {/* Info Cards */}
      <div className="flex align-center bg-white text-black-500 p-4 rounded-lg mt-6">
        <BsExclamationOctagonFill className="mr-4 text-3xl text-red-500" />
        Unfortunately, delivery is unavailable to this address
      </div>
      <div className="flex bg-green-100 text-green-500 p-4 rounded-lg mt-6">
        <GrGift className="mr-4 text-3xl text-green-500" />
        Free delivery – on any order
      </div>
    </section>
  );
};

export default SideHeader;
