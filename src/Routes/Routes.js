// Routes.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Index from "../Page/index";
import Form from "../Tools/Form/Form";
import Header from "../Page/Partials/Header";
import Footer from "../Page/Partials/Footer";
import Privacy from "../Page/Privacy";
import Terms from "../Page/Terms";
import Articles from "../Page/Articles";
import Shops from "../Page/RecepiePage/Shops";
import ShopsProducts from "../Page/RecepiePage/ShopsProducts";
import ProductDetails from "../Page/ProductPage/ProductDetails";
import ProductGrid from "../Page/ProductPage/ProductGrid";

const NavigationRoutes = () => {
  return (
    <Router>
      <section>
        <Header />
        {/* Add breadcrumb component */}
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/home" element={<Index />} />
          <Route path="/signup" element={<Form type="signup" />} />
          <Route path="/login" element={ <Form type="login" />} />
          <Route path="/forgotPassword" element={ <Form type="forgotPassword" />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/contact" element={<Form type="contact" />} />
          <Route path="/shops" element={<Shops />} />
          <Route path="/shop/:shopCategory" element={<ShopsProducts />} />
          <Route path="/products" element={<ProductGrid />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route element={<Index />} />
        </Routes>
        <Footer />
      </section>
    </Router>
  );
};

export default NavigationRoutes;
