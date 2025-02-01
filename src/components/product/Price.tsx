interface ProductCardProps {
  data: { mrp: number; discount: number; discountPercentage: number };
}

export default function Price({ data }: ProductCardProps) {
  if (!data) {
    return null;
  }

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <div className="text-sm text-gray-500">
          MRP: <span className="line-through">Rs. {data.mrp}</span> (Inclusive
          of all taxes)
        </div>
        <div className="flex items-center gap-4">
          <span className="text-2xl font-bold text-red-500">
            Rs. {data.discount}
          </span>
          <span className="px-2 py-1 bg-gray-100 text-sm">
            {data.discountPercentage}% OFF
          </span>
        </div>
      </div>
    </div>
  );
}
