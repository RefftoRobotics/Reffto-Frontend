import { useParams } from "react-router-dom";
import Action from "../components/product/Action";
// import CustomerReviews from "../components/product/CustomerReviews";
import Delivery from "../components/product/Delivery";
import Guarantee from "../components/product/Guarantee";
import Price from "../components/product/Price";
import ProductImage from "../components/product/ProductImage";
import Rating from "../components/product/Rating";
import Specifications from "../components/product/Specifications";
import { useAppContext } from "../context/AppContext";

export default function ProductPage() {
  const { products } = useAppContext();
  const { categoriesId, productsId } = useParams();

  const filteredProducts = products.filter(
    (product) => product.id === Number(categoriesId)
  );
  const product = filteredProducts
    .map((section) =>
      section.subproducts.filter((product) => product.id === Number(productsId))
    )
    .flat()[0];

  console.log(product);

  return (
    <div className="container mx-auto px-4 py-8 max-w-screen-xl max-h-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        <ProductImage data={product.imageUrls} />
        <div className="space-y-6">
          <h1 className="text-2xl font-semibold">{product.title}</h1>
          <Rating data={product.productRating} />
          <Price data={product.price} />
          <Action />
          <Delivery />
          <Specifications data={product.specifications} />
          <Guarantee />
        </div>
      </div>
      {/* <CustomerReviews product={product.} /> */}
    </div>
  );
}
