import { ChevronRight } from "lucide-react";

interface ProductCardProps {
  data: {
    label: string;
    value: string;
}[]
}

export default function Specifications({ data }: ProductCardProps) {
  return (
    <div className="space-y-2">
      <div className="grid grid-cols-2 gap-4 text-sm">
        {data.map((spec, index) => (
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
