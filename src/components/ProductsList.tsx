import { useParams } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import { ProductsListCard } from "./ProductsListCard";

export default function ProductList() {
  const { products } = useAppContext();
  const { categoriesId } = useParams();

  const filteredProducts = products.filter(
    (product) => product.id === Number(categoriesId)
  );

  return (
    <>
      <h1>
        {filteredProducts.map((section, index) => (
          <div key={index} className="mb-8">
            <h1 className="text-3xl font-bold mb-4 text-gray-800 border-b-2 border-gray-300 pb-2">
              {section.subcategoriestitle}
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {section.subproducts.map((product) => (
                <ProductsListCard key={product.id} data={product} />
              ))}
            </div>
          </div>
        ))}
      </h1>
    </>
  );
}
