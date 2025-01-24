import { Star } from "lucide-react";

export default function Rating() {
  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center">
        <div className="flex">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              className={`w-4 h-4 ${
                star <= 4
                  ? "fill-amber-400 text-primary"
                  : "fill-gray-200 text-gray-200"
              }`}
            />
          ))}
        </div>
        <span className="ml-2 text-sm text-gray-600">(4.7)</span>
      </div>
      <div className="flex gap-4 text-sm text-blue-500">
        <span>6548 Ratings</span>
        <span>84 Reviews</span>
        <span>15 Selfies</span>
      </div>
      <button className="text-blue-500 text-sm">Have a question?</button>
    </div>
  );
}
