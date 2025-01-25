import { Star } from "lucide-react";
import { Product } from "../../data/product";

interface ProductCardProps {
  product: Product;
}

export default function Rating({ product }: ProductCardProps) {
  const { productrating } = product;

  if (!productrating) {
    return null;
  }

  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center">
        <div className="flex">
          {[...Array(5)].map((_, index) => (
            <Star
              key={index}
              className={`w-4 h-4 ${
                index < productrating.star
                  ? "fill-amber-400 text-primary"
                  : "fill-gray-200 text-gray-200"
              }`}
            />
          ))}
        </div>
        <span className="ml-2 text-sm text-gray-600">
          ({productrating.rating})
        </span>
      </div>
      <div className="flex gap-4 text-sm text-blue-500">
        <span>{productrating.reviews} Ratings</span>
        <span>{productrating.selfies} Selfies</span>
      </div>
      <button className="text-blue-500 text-sm">Have a question?</button>
    </div>
  );
}
