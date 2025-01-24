import { Route, Routes } from "react-router-dom";
import NavbarLayout from "./components/Layouts/NavbarLayout";
import Home from "./pages/Home";
import Product from "./pages/Product";

export default function App() {
  return (
    <>
      <NavbarLayout />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </>
  );
}
