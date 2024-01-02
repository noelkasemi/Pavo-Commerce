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
  { path: "/home", element: <Index /> },
  { path: "/signup", element: <Form type="signup" /> },
  { path: "/login", element: <Form type="login" />},
  { path: "/privacy", element: <Privacy />},
  { path: "/terms", element: <Terms /> },
  { path: "/articles", element: <Articles /> },
  { path: "/shops", element: <Shops /> },
  { path: "/shops/:shopName/:shopCategory", element: <ShopsProducts />},
  { path: "/shops/:shopName/products/:productId", element: <ProductDetails /> },
  { path: "/products", element: <ProductGrid /> },
  { path: "/products/:productId", element: <ProductDetails /> },
  {path: '/cart' , element: <CartPage />},
  {path: '/checkout' , element: <CheckoutForm />}
];

export default routes;
