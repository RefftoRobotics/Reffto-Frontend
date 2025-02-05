import { Route, Routes } from "react-router-dom";
import NavbarLayout from "./components/Layouts/NavbarLayout";
import FooterLayout from "./components/Layouts/FooterLayout";
import Home from "./pages/Home";
import CategoriePage from "./pages/CategoriePage";
import ProductPage from "./pages/ProductPage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";

export default function App() {
  return (
    <>
      <NavbarLayout />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories/:categoriesId" element={<CategoriePage />} />
        <Route
          path="/categories/:categoriesId/:productsId"
          element={<ProductPage />}
        />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
      <FooterLayout />
    </>
  );
}
