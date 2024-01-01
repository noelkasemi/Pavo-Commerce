// routes.js

import Index from "../Page/index";
import Form from "../Tools/Form/Form";
import Privacy from "../Page/Privacy";
import Terms from "../Page/Terms";
import Articles from "../Page/Articles";
import Shops from "../Page/Shops/Shops";
import ShopsProducts from "../Page/Shops/ShopsProducts";
import ProductDetails from "../Page/ProductPage/ProductDetails";
import ProductGrid from "../Page/ProductPage/ProductGrid";
import CartPage from "../Page/Cart/CartPage";
import CheckoutForm from "../Tools/Form/Checkout";

const routes = [
  { path: "/", element: <Index />, breadcrumb: "Home" },
  { path: "/signup", element: <Form type="signup" />, breadcrumb: "Sign Up" },
  { path: "/login", element: <Form type="login" />, breadcrumb: "Login" },
  { path: "/privacy", element: <Privacy />, breadcrumb: "Privacy" },
  { path: "/terms", element: <Terms />, breadcrumb: "Terms" },
  { path: "/articles", element: <Articles />, breadcrumb: "Articles" },
  { path: "/shops", element: <Shops />, breadcrumb: "Shops" },
  { path: "/shop/:shopCategory", element: <ShopsProducts />, breadcrumb: "Shop Category" },
  { path: "/products", element: <ProductGrid />, breadcrumb: "Products" },
  { path: "/product/:productId", element: <ProductDetails />, breadcrumb: "Product Details" },
  {path: '/cart' , element: <CartPage />, breadcrumb: 'Cart'},
  {path: '/checkout' , element: <CheckoutForm />, breadcrumb: 'Checkout'}
];

export default routes;
