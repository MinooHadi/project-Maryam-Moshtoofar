import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Product from "../pages/Product";
import Category from "../pages/Category";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Redirect from "../pages/Redirect";
import Login from "../pages/login";
import AdminLayout from "../layouts/AdminLayout";
import ProductsManagement from "../pages/ProductsManagement";
import StockPrice from "../pages/StockPrice";
import Orders from "../pages/orders";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
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
    </BrowserRouter>
  );
};

export default AppRoutes;
