import { useParams } from "react-router-dom";
import Action from "../components/product/Action";
import CustomerReviews from "../components/product/CustomerReviews";
import Delivery from "../components/product/Delivery";
import Guarantee from "../components/product/Guarantee";
import Price from "../components/product/Price";
import ProductImage from "../components/product/ProductImage";
import Rating from "../components/product/Rating";
import Specifications from "../components/product/Specifications";
import { productCategories, droneParts, sensorModules } from "../data/product";

export default function ProductPage() {
  const { productId } = useParams<{ productId: string }>();
  const sections = [
    { data: productCategories },
    { data: droneParts },
    { data: sensorModules },
  ];

  // Find the product with the matching productId
  const product = sections
    .flatMap((section) => section.data)
    .find((product) => product.id === Number(productId));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-screen-xl max-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        <ProductImage product={product} />
        <div className="space-y-6">
          <h1 className="text-2xl font-semibold">{product.title}</h1>
          <Rating product={product} />
          <Price product={product} />
          <Action product={product} />
          <Delivery product={product} />
          <Specifications product={product} />
          <Guarantee product={product} />
        </div>
      </div>
      <CustomerReviews product={product} />
    </div>
  );
}
