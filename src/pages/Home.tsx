import { CategorySidebar } from "../components/CategorySidebar";
import FeaturedBrands from "../components/FeaturedBrands";
import CategoriesList from "../components/CategoriesList";

export default function Home() {
  return (
    <>
      <div className="flex min-h-screen bg-gray-50">
        <CategorySidebar />
        <CategoriesList />
      </div>
      <FeaturedBrands />
    </>
  );
}
