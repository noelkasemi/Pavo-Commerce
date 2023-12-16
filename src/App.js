// Import React components
import Index from "./Page/index";
import Form from "./Tools/Form/Form";
import Header from "./Page/Partials/Header";
import Footer from "./Page/Partials/Footer";
import Privacy from "./Page/Privacy";
import Terms from "./Page/Terms";
import Articles from "./Page/Articles";
import { useState } from "react";
import ProductDetails from "./Page/ProductPage/ProductDetails";
import ProductGrid from "./Page/ProductPage/ProductGrid";
import Shops from "./Page/RecepiePage/Shops";
import BreadCrumb from "./Tools/BreadCrumb";
import ForgotPasswordForm from "./Tools/Form/ForgotPassword";
import ShopsProducts from "./Page/RecepiePage/ShopsProducts";

export default function App() {
  // State to check which page is and should be rendered
  const [currentPage, setCurrentPage] = useState("home");
  const [currentLang, setCurrentLang] = useState("English");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [productPage, setProductPage] = useState(false);
  const [breadcrumbs, setBreadcrumbs] = useState([{ label: "home" }]);
  const [selectedShop, setSelectedShop] = useState(null);
  console.log(selectedShop)
  // Function to change the language of the page
  const changeLangTo = (lang) => {
    setCurrentLang(lang);
  };

  const navigateToShopProducts = (shopCategory) => {
    setSelectedShop(shopCategory); // Update selectedShop when a shop is selected
    setCurrentPage("shops"); // Navigate to the ShopProducts page
    setBreadcrumbs((prevBreadcrumbs) => [
      ...prevBreadcrumbs,
      {label: shopCategory}
    ])
  };

  // Function to change the current page to the clicked one
  const navigateTo = (page) => {
    setCurrentPage(page);
    // Update breadcrumbs when navigating to a new page
    const isPageInBreadcrumbs = breadcrumbs.some(
      (breadcrumb) => breadcrumb.label === page
    );

    if (isPageInBreadcrumbs) {
      // If the page is already in the breadcrumbs, truncate the array to remove duplicates
      setBreadcrumbs((prevBreadcrumbs) => {
        const index = prevBreadcrumbs.findIndex(
          (breadcrumb) => breadcrumb.label === page
        );
        return index !== -1
          ? prevBreadcrumbs.slice(0, index + 1)
          : prevBreadcrumbs;
      });
    } else {
      // If the page is not in the breadcrumbs, add it to the end
      setBreadcrumbs((prevBreadcrumbs) => [
        ...prevBreadcrumbs,
        { label: page },
      ]);
    }
    setProductPage(false);
  };

  const navigateToProductDetails = (product) => {
    setSelectedProduct(product);
    // Update breadcrumbs when navigating to product details
    setBreadcrumbs((prevBreadcrumbs) => [
      ...prevBreadcrumbs,
      { label: `Product Details - ${product.title}` },
    ]);

    setProductPage(true);
  };

  // Object mapping page names to their corresponding components
  const pageComponents = {
    home: <Index />,
    signup: <Form navigateTo={navigateTo} type="signup" />,
    login: <Form navigateTo={navigateTo} type="login" />,
    forgotPassword: <Form navigateTo={navigateTo} type="forgotPassword" />,
    privacy: <Privacy />,
    terms: <Terms />,
    articles: <Articles />,
    contact: <Form type="contact" />,
    shops:
      currentPage === "shops" && selectedShop ? (
        <ShopsProducts navigateTo={navigateToProductDetails} selectedShop={selectedShop} />
      ) : (
        <Shops navigateTo={navigateToShopProducts} />
      ),
    // <RecepiePage navigateToDetails={navigateToDetails} currentLang={currentLang} />
    products: !productPage ? (
      <ProductGrid search={true} navigateTo={navigateToProductDetails} />
    ) : (
      <ProductDetails
        navigateTo={navigateToProductDetails}
        product={selectedProduct}
      />
    ),
  };

  // Function to render the current page component
  const renderPage = () => pageComponents[currentPage] || <Index />;

  // Render the main structure of the app
  return (
    <div className="App  ">
      {/* Header component with navigation and language change functionality */}
      <Header
        navigateTo={navigateTo}
        changeLangTo={changeLangTo}
        currentPage={currentPage}
      />
      <BreadCrumb breadcrumbs={breadcrumbs} navigateTo={navigateTo} />
      {/* Render the current page component */}
      {renderPage()}

      {/* Footer component with navigation functionality */}
      <Footer navigateTo={navigateTo} />
    </div>
  );
}
