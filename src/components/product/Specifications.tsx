import { ChevronRight } from "lucide-react";
import { Product } from "../../data/product";

interface ProductCardProps {
  product: Product;
}

export default function Specifications({ product }: ProductCardProps) {
  return (
    <div className="space-y-2">
      <div className="grid grid-cols-2 gap-4 text-sm">
        {product.specifications?.map((spec, index) => (
          <div key={index} className="space-y-2">
            <div>
              {spec.label}: {spec.value}
            </div>
          </div>
        ))}
      </div>
      <button className="text-blue-500 text-sm flex items-center">
        View all item details
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
}
