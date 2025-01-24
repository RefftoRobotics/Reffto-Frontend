import { Star } from "lucide-react";

export default function CustomerReviews() {
  const reviews = [
    {
      name: "John Doe",
      rating: 4,
      comment: "Great product! Highly recommend.",
    },
    {
      name: "Jane Smith",
      rating: 5,
      comment: "Excellent quality and fast delivery.",
    },
  ];

  return (
    <div className="space-y-6 mt-8 p-6 bg-white shadow rounded-lg">
      <h2 className="text-2xl font-semibold border-b pb-4">Customer Reviews</h2>
      <div className="space-y-6">
        {reviews.map((review, index) => (
          <div key={index} className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-lg font-bold text-gray-500">
              {review.name.charAt(0)}
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <div className="font-medium text-lg">{review.name}</div>
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`w-5 h-5 ${
                        star <= review.rating
                          ? "fill-amber-400 text-primary"
                          : "fill-gray-200 text-gray-200"
                      }`}
                    />
                  ))}
                </div>
              </div>
              <div className="text-sm text-gray-600 mt-2">{review.comment}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
