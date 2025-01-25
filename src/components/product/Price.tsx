import { Product } from "../../data/product";

interface ProductCardProps {
  product: Product;
}

export default function Price({ product }: ProductCardProps) {
  const price = product.price;

  if (!price) {
    return null;
  }

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <div className="text-sm text-gray-500">
          MRP: <span className="line-through">Rs. {price.mrp}</span> (Inclusive
          of all taxes)
        </div>
        <div className="flex items-center gap-4">
          <span className="text-2xl font-bold text-red-500">
            Rs. {price.discount}
          </span>
          <span className="px-2 py-1 bg-gray-100 text-sm">
            {price.percentage}% OFF
          </span>
        </div>
      </div>
    </div>
  );
}
