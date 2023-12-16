import { useState } from "react";
import ProductFetcher from "../../Data/Api/ProductFetcher";
import Card from "../../Tools/Card";
import ProductCard from "../ProductPage/ProductCard";

export default function ShopsProducts({selectedShop, navigateTo}) {
    const [products, setProducts] = useState([])
    const [selectedProduct, setSelectedProduct] = useState(null);
  
      // Function to open the modal with a selected product
  const openModal = (product) => {
    setSelectedProduct(product);
    navigateTo(product);
    window.scrollTo(0, 0);
  };
  // Filter products based on the selected shop's category
  const filteredProducts = products.filter(product => product.category === selectedShop);
    return <section className="w-full">
        <ProductFetcher setProducts={setProducts} />
        <section className="grid grid-cols-2 md:grid-cols-3 mx-auto lg:grid-cols-4 xl:grid-cols-5 xl:w-10/12 gap-4 xl:px-0 sm:px-16 ">
        {filteredProducts.map(product => <ProductCard navigateTo={navigateTo} key={product.id} product={product} onClick={openModal } />)}
        </section>
    </section>
}