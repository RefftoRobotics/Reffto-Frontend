import { CategorySidebar } from "../components/CategorySidebar";
import FeaturedBrands from "../components/FeaturedBrands";
import CategoriesList from "../components/CategoriesList";
import Carousel from "../components/Carousel";

export default function Home() {
  return (
    <>
      <div className="flex min-h-screen bg-gray-50">
        <CategorySidebar />

        <div className="flex-1">
          <Carousel />
          <CategoriesList />
        </div>
      </div>
      <FeaturedBrands />
    </>
  );
}
