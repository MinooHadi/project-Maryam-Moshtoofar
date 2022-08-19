// <BrowserRouter>
// <Routes>
//   <Route element={<MainLayout />}>
//     <Route path="/" element={<Home />} />
//     <Route path="category:id" element={<Category />} />
//     <Route path="category:id/product:id" element={<Product />} />
//     <Route path="cart" element={<Cart />} />
//     <Route path="checkout" element={<Checkout />} />
//     <Route path="redirect" element={<Redirect />} />
//     <Route path="*" element={<NotFound />} />
//   </Route>
//   <Route path="login" element={<Login />} />
//   <Route element={<AdminLayout />}>
//     <Route path="admin/products" element={<ProductsManagement />} />
//     <Route path="admin/stockprice" element={<StockPrice />} />
//     <Route path="admin/orders" element={<Orders />} />
//   </Route>
// </Routes>
// </BrowserRouter>

export const HOME_ROUTE = "/";
export const CATEGORY_ROUTE = "category:id";
export const PRODUCT_ROUTE = "category:id/product:id";
export const CART_ROUTE = "cart";
export const CHECKOUT_ROUTE = "checkout";
export const REDIRECT_ROUTE = "redirect";
export const LOGIN_ROUTE = "login";
export const PRODUCTS_MANAGEMENT_ROUTE = "admin/products";
export const STOCK_PRICE_ROUTE = "admin/stockprice";
export const ORDERS_ROUTE = "admin/orders";
