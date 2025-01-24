export default function Price() {
  return (
    <div className="space-y-2">
      <div className="text-sm text-gray-500">
        MRP: <span className="line-through">Rs. 999</span> (Inclusive of all
        taxes)
      </div>
      <div className="flex items-center gap-4">
        <span className="text-2xl font-bold text-red-500">Rs. 153</span>
        <span className="px-2 py-1 bg-gray-100 text-sm">85% OFF</span>
      </div>
    </div>
  );
}
