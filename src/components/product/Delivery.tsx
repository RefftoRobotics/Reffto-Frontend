import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import { Product } from "../../data/product";
interface ProductCardProps {
  product: Product;
}
export default function Delivery({ product }: ProductCardProps) {
  return (
    <div className="space-y-4">
      <div className="font-medium">Delivery</div>
      <div className="flex gap-2">
        <Input placeholder="Enter pincode" className="max-w-[200px]" />
        <Button className="bg-gray-400 text-white hover:bg-gray-500">
          CHECK
        </Button>
      </div>
      <div className="text-sm text-gray-500">
        Generally delivered in 7 - 11 days
      </div>
    </div>
  );
}
