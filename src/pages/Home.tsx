import { CategorySidebar } from "../components/CategorySidebar";
import Products from "../components/Products";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <CategorySidebar />
      <Products />
    </div>
  );
}

