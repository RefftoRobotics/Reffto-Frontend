import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import Categories from "../data/categorie.json";
import Products from "../data/products.json";

interface CommonProperties {
  id: number;
  subcategoriestitle: string;
  imgUrl: string;
  subtitle: string;
}

interface Category {
  id: number;
  categoriestitle: string;
  subcategories: Array<CommonProperties>;
}

interface Product extends CommonProperties {
  subproducts: Array<{
    id: number;
    title: string;
    subtitle: string;
    imageUrls: string[];
    price: {
      mrp: number;
      discount: number;
      discountPercentage: number;
    };
    specifications: Array<{
      label: string;
      value: string;
    }>;
    productRating: {
      star: number;
      rating: number;
      reviews: number;
    };
  }>;
}

interface AppContextProps {
  categories: Category[];
  products: Product[];
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    setCategories(Categories);
    setProducts(Products);
  }, []);

  return (
    <AppContext.Provider value={{ categories, products }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
