import Action from "../components/product/Action";
import CustomerReviews from "../components/product/CustomerReviews";
import Delivery from "../components/product/Delivery";
import Guarantee from "../components/product/Guarantee";
import Price from "../components/product/Price";
import ProductImage from "../components/product/ProductImage";
import Rating from "../components/product/Rating";
import Specifications from "../components/product/Specifications";

export default function Product() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-screen-xl max-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        <ProductImage />
        <div className="space-y-6">
          <h1 className="text-2xl font-semibold">
            Drone with 4K Camera for Adults
          </h1>
          <Rating />
          <Price />
          <Action />
          <Delivery />
          <Specifications />
          <Guarantee />
        </div>
      </div>
      <CustomerReviews />
    </div>
  );
}
