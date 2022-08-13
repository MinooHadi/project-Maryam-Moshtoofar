import "./App.css";
import MainLayout from "./layouts/MainLayout";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Category from "./pages/Category";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Redirect from "./pages/Redirect";
import Login from "./pages/Login";
import AdminLayout from "./layouts/AdminLayout";
import ProductsManagement from "./pages/ProductsManagement";
import StockPrice from "./pages/StockPrice";
import Orders from "./pages/Orders";

function App() {
  const location = useLocation();
  return (
    <Routes key={location.pathname} location={location}>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="category:id" element={<Category />} />
        <Route path="category:id/product:id" element={<Product />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="redirect" element={<Redirect />} />
      </Route>
      <Route path="login" element={<Login />} />
      <Route element={<AdminLayout />}>
        <Route path="admin/products" element={<ProductsManagement />} />
        <Route path="admin/stockprice" element={<StockPrice />} />
        <Route path="admin/orders" element={<Orders />} />
      </Route>
    </Routes>
  );
}

export default App;
