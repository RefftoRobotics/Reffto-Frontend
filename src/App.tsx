import { Route, Routes } from "react-router-dom";
import NavbarLayout from "./components/Layouts/NavbarLayout";
import FooterLayout from "./components/Layouts/FooterLayout";
import Home from "./pages/Home";
import CategoriePage from "./pages/CategoriePage";
import ProductPage from "./pages/ProductPage";

export default function App() {
  return (
    <>
      <NavbarLayout />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories/:categoriesId" element={<CategoriePage />} />
        <Route
          path="/categories/:categoriesId/:productId"
          element={<ProductPage />}
        />
      </Routes>
      <FooterLayout />
    </>
  );
}
