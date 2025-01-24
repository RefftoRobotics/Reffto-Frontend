import { ChevronRight } from "lucide-react";

export default function Specifications() {
  return (
    <div className="space-y-2">
      <div className="grid grid-cols-2 gap-4 text-sm">
        <div className="space-y-2">
          <div>Product ID: 12345</div>
          <div>With Chain: No</div>
        </div>
        <div className="space-y-2">
          <div>Color: Tan</div>
          <div>No. of Main Pockets: 2</div>
        </div>
      </div>
      <button className="text-blue-500 text-sm flex items-center">
        View all item details
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
}
