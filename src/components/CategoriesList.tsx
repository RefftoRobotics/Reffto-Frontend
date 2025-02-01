import { useAppContext } from "../context/AppContext";
import { CategoriesListCard } from "./CategoriesListCard";

export default function CategoriesList() {
  const { categories } = useAppContext();
  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 md:p-8">
      <div className="max-w-7xl mx-auto">
        {categories.map((section, index) => (
          <div key={index} className="mb-8">
            <h1 className="text-3xl font-bold mb-4 text-gray-800 border-b-2 border-gray-300 pb-2">
              {section.categoriestitle}
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {section.subcategories.map((categoriesList) => (
                <CategoriesListCard key={categoriesList.id} data={categoriesList} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
