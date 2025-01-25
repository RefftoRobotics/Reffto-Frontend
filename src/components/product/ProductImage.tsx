import { useState, useRef } from "react";
import { Product } from "../../data/product";
interface ProductCardProps {
  product: Product;
}

export default function ProductImage({ product }: ProductCardProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const imageRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>): void => {
    if (!imageRef.current) return;

    const { left, top, width, height } =
      imageRef.current.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;

    setZoomPosition({ x, y });
  };
  return (
    <div className="flex flex-col md:flex-row gap-4">
      {/* Thumbnails */}
      <div className="flex md:flex-col gap-2">
        {product.imageUrl.map((img, index) => (
          <div
            key={index}
            className={`border-2 cursor-pointer w-20 h-20 ${
              selectedImage === index ? "border-primary" : "border-gray-200"
            }`}
            onClick={() => setSelectedImage(index)}
          >
            <img
              src={img || "/placeholder.svg"}
              alt={`Product thumbnail ${index + 1}`}
              width={80}
              height={80}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>

      {/* Main Image */}
      <div
        ref={imageRef}
        className="flex-1 relative overflow-hidden cursor-zoom-in"
        onMouseEnter={() => setIsZoomed(true)}
        onMouseLeave={() => setIsZoomed(false)}
        onMouseMove={handleMouseMove}
      >
        <img
          src={product.imageUrl[selectedImage] || "/placeholder.svg"}
          alt="Product main view"
          width={500}
          height={500}
          className={`w-full h-auto transition-transform duration-200 ${
            isZoomed ? "scale-150" : "scale-100"
          }`}
          style={
            isZoomed
              ? {
                  transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`,
                }
              : undefined
          }
        />
        <div className="absolute bottom-4 right-4 text-sm text-gray-500">
          Hover to zoom
        </div>
      </div>
    </div>
  );
}
