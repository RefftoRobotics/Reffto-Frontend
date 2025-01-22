import { ProductCard } from "../components/ProductCard";
import { productCategories, droneParts, sensorModules } from "../data/product";

export default function Products() {
  const sections = [
    { title: "Product Categories", data: productCategories },
    { title: "Drone Parts", data: droneParts },
    { title: "Sensor Modules", data: sensorModules },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 md:p-8">
      <div className="max-w-7xl mx-auto">
        {sections.map((section, index) => (
          <div key={index} className="mb-8">
            <h1 className="text-3xl font-bold mb-4 text-gray-800 border-b-2 border-gray-300 pb-2">
              {section.title}
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {section.data.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
