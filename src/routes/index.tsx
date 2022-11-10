import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  HOME_ROUTE,
  CATEGORY_ROUTE,
  PRODUCT_ROUTE,
  CART_ROUTE,
  CHECKOUT_ROUTE,
  REDIRECT_ROUTE,
  LOGIN_ROUTE,
  PRODUCTS_MANAGEMENT_ROUTE,
  STOCK_PRICE_ROUTE,
  ORDERS_ROUTE,
} from "../config/routes";
import MainLayout from "../layouts/c-main-layout";
import Home from "../pages/c-home";
import Product from "../pages/c-product";
import Category from "../pages/c-category";
import Cart from "../pages/c-cart";
import Checkout from "../pages/c-checkout";
import Redirect from "../pages/c-redirect";
import Login from "../pages/c-login";
import AdminLayout from "../layouts/c-admin-layout";
import ProductsManagement from "../pages/c-products-management";
import StockPrice from "../pages/c-stock-price";
import Orders from "../pages/c-orders";
import NotFound from "../pages/c-notfound";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path={HOME_ROUTE} element={<Home />} />
          <Route path={CATEGORY_ROUTE} element={<Category />} />
          <Route path={PRODUCT_ROUTE} element={<Product />} />
          <Route path={CART_ROUTE} element={<Cart />} />
          <Route path={CHECKOUT_ROUTE} element={<Checkout />} />
          <Route path={REDIRECT_ROUTE} element={<Redirect />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path={LOGIN_ROUTE} element={<Login />} />
        <Route element={<AdminLayout />}>
          <Route
            path={PRODUCTS_MANAGEMENT_ROUTE}
            element={<ProductsManagement />}
          />
          <Route path={STOCK_PRICE_ROUTE} element={<StockPrice />} />
          <Route path={ORDERS_ROUTE} element={<Orders />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
