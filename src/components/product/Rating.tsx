import { Star } from "lucide-react";

interface ProductCardProps {
  data: {
    star: number;
    rating: number;
    reviews: number;
  };
}

export default function Rating({ data }: ProductCardProps) {
  if (!data) {
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
                index < data.star
                  ? "fill-amber-400 text-primary"
                  : "fill-gray-200 text-gray-200"
              }`}
            />
          ))}
        </div>
        <span className="ml-2 text-sm text-gray-600">({data.rating})</span>
      </div>
      <div className="flex gap-4 text-sm text-blue-500">
        <span>{data.reviews} Ratings</span>
        {/* <span>{data.selfies} Selfies</span> */}
      </div>
      <button className="text-blue-500 text-sm">Have a question?</button>
    </div>
  );
}
