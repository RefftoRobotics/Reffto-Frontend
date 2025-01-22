import { useState } from "react";
import { Card } from "../components/ui/Card";
import { Product } from "../data/product";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Card className="group relative w-full sm:w-[300px] hover:shadow-lg cursor-pointer m-2">
      <div className="relative overflow-hidden rounded-t-lg flex justify-center items-center bg-gray-100 p-4">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-transparent opacity-0 group-hover:opacity-100" />
        {isLoading && (
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="loader">Loading...</div>
          </div>
        )}
        <img
          src={product.imageUrl || "/placeholder.svg"}
          alt={product.title}
          className={`w-3/4 h-auto transform transition-transform duration-300 group-hover:scale-110 rounded-xl ${isLoading ? 'hidden' : 'block'}`}
          onLoad={() => setIsLoading(false)}
        />
      </div>
      <div className="p-4 bg-purple-50 rounded-b-lg">
        <h3 className="text-lg font-semibold text-purple-900 text-center">
          {product.title}
        </h3>
        <p className="text-sm text-purple-600 mt-1 text-center">
          {product.subtitle}
        </p>
      </div>
    </Card>
  );
}
