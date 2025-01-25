import { ChevronRight } from "lucide-react";

export default function Guarantee() {
  return (
    <div className="flex items-center gap-2 text-sm border-t pt-4">
      <span className="font-medium">Reffto Guarantee</span>
      <span className="text-gray-500">
        Return and replacement allowed for 7 days after delivery
      </span>
      <button className="text-blue-500 flex items-center">
        Know More
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
}
