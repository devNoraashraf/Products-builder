import type { Iproduct } from "../interfaces";
import { textSlice } from "../utils/Functions";
import Image from "./Image";
import Button from "./Ui/Button";

interface ProductsCardProps {
  product: Iproduct;
}

const ProductsCard = ({ product }: ProductsCardProps) => {
  const { title, description, price, imageURL, colors } = product;

  return (
    <div className="rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl hover:ring-2 hover:ring-blue-300 transition-all p-5 bg-white max-w-sm m-5">
      {/* Product Image */}
      <Image
        imgSrc={imageURL}
        altText={title}
        className="w-full h-52 object-cover rounded-xl mb-4"
      />

      {/* Title */}
      <h3 className="text-xl font-semibold text-gray-800 mb-2 truncate">{title}</h3>

      {/* Description */}
      <p className="text-sm text-gray-600 mb-3">{textSlice(description)}</p>

      {/* Color Options */}
      {colors.length > 0 && (
        <div className="flex items-center mb-4 gap-2">
          {colors.map((color) => (
            <span
              key={color}
              className="w-5 h-5 rounded-full border border-gray-300"
              style={{ backgroundColor: color }}
            ></span>
          ))}
        </div>
      )}

      {/* Price and Thumbnail */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-lg font-bold text-gray-900">${price?.toLocaleString()}</span>
        <Image
          imgSrc={imageURL}
          altText={title}
          className="w-8 h-8 rounded-full object-cover border"
        />
      </div>

      {/* Action Buttons */}
      <div className="flex space-x-4 mt-2">
        <Button
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-all"
          onClick={() => alert("Edit button clicked!")}
          width="w-fit"
        >
          ✏️ Edit
        </Button>
        <Button
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-all"
          onClick={() => alert("Delete button clicked!")}
          width="w-fit"
        >
          🗑️ Delete
        </Button>
      </div>
    </div>
  );
};

export default ProductsCard;
