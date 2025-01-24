import { Button } from "../ui/Button";

export default function Action() {
  return (
    <div className="flex flex-col md:flex-row gap-4">
      <Button className="flex-1 border border-gray-800 text-gray-800 bg-gray-100 hover:bg-gray-200">
        ADD TO CART
      </Button>
      <Button className="flex-1 bg-gray-800 text-white hover:bg-gray-700">
        BUY NOW
      </Button>
    </div>
  );
}
