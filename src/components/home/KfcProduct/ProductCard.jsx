/* eslint-disable react/prop-types */
const ProductCard = ({ product, onViewDetails }) => {
  return (
    <div className="max-w-sm border rounded-lg shadow-md p-4">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded-md"
      />
      <h2 className="mt-4 text-lg font-bold">{product.name}</h2>
      <p className="text-gray-700 mt-2">${product.price.toFixed(2)}</p>
      <button
        onClick={() => onViewDetails(product.id)}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        View Details
      </button>
    </div>
  );
};

export default ProductCard;
