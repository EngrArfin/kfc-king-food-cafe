const ProductData = ({ product }) => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={product.image}
          alt={product.name}
          className="w-full md:w-1/2 h-96 object-cover rounded-md"
        />
        <div className="flex-1">
          <h1 className="text-2xl font-bold">{product.name}</h1>
          <p className="text-gray-600 mt-2">{product.description}</p>
          <p className="text-xl text-gray-800 font-semibold mt-4">
            Price: ${product.price.toFixed(2)}
          </p>
          <button className="mt-6 px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductData;
