import { useState, useEffect } from "react";
import MainImage from "./MainImage";
import Table from "../../Tools/Table";
import { Star, ConclusionSmartphone, Details1 } from "../Partials/Imports";
import ProductGrid from "./ProductGrid";
import * as Consts from "./ProductConstants";
import ProductInformation from "./ProductInformation";
import ImageGallery from "./ImageGallery";
import Tabs from "../../Tools/Tab";
import useResizeEffect from "../../Tools/ResizeEffect";
import { useLocation, useParams } from "react-router-dom";

const ProductDetails = ({ }) => {

  const location = useLocation();
  const { productId } = useParams();
  const { product } = location.state || {};
  
  const tabs = {
    Description: product.description,
    Details: <Table />,
    Rating: (
      <section className="flex border-b pb-4">
        <article className="w-1/2 flex space-y-2 flex-col items-center">
          {" "}
          <p className="flex text-2xl font-semibold text-[#e65228] items-center">
            {" "}
            {product.rating.rate ? product.rating.rate : 0}
            <Star style={`w-7 h-7 ml-1`} />{" "}
          </p>
          <p className="text-sm">{product.rating.count} ratings </p>
        </article>
        <article className="w-1/2 flex items-center justify-center ">
          <button className="border border-[#e65228] px-4 py-2 rounded font-semibold hover:bg-[#e65228] hover:text-white text-[#e65228] w-fit">
            Add your own rating
          </button>
        </article>
      </section>
    ),
  };

  const { generateCode, generateTax, calculateSave } = Consts;

  const code = generateCode(product);
  const tax = generateTax();
  const save = calculateSave(product);

  //State to keep track of the count and to change it accordingly
  const [count, setCount] = useState(1);
  const images = [product.image, Details1, ConclusionSmartphone];
  // State to keep track of the active image
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  //State to keep track of the active tab and change it accordingly
  const [activeTab, setActiveTab] = useState("Description");
  // Update isMobile state on window resize
  const isMobile = useResizeEffect();

  // Function to handle image click and update the active image
  const handleImageClick = (index) => {
    setActiveImageIndex(index);
  };

  // State to track whether the main image is in full screen
  const [isMainImageFullScreen, setIsMainImageFullScreen] = useState(false);

  // Function to handle main image click and toggle full screen
  const handleMainImageClick = () => {
    const mainImageElement = document.getElementById("main-image");

    if (mainImageElement) {
      if (!document.fullscreenElement) {
        // If not in full screen, enter full screen
        mainImageElement.requestFullscreen().catch((err) => {
          console.error("Error attempting to enable full-screen mode:", err);
        });
        setIsMainImageFullScreen(true);
      } else {
        // If already in full screen, exit full screen
        document.exitFullscreen().catch((err) => {
          console.error("Error attempting to exit full-screen mode:", err);
        });
        setIsMainImageFullScreen(false);
      }
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <main className=" bg-[#f7f7f7] space-y-16 flex flex-col w-full items-center justify-center pt-20">
      <section className="flex flex-col items-center lg:flex-row rounded-lg w-full lg:w-4/5 p-4 shadow-lg">
        {/* Images of the product */}
        <ImageGallery
          product={product}
          images={images}
          activeImageIndex={activeImageIndex}
          handleImageClick={handleImageClick}
        />
        {/* Main image of the product without magnifying functionality */}
        <MainImage
          isMobile={isMobile}
          handleMainImageClick={handleMainImageClick}
          images={images}
          activeImageIndex={activeImageIndex}
          product={product}
        />
        {/* number of images */}
        <p className="absolute bg-[#e8e8e8] py-2 px-8 left-2 sm:left-0 lg:left-44 font-semibold top-[267px] sm:top-44  rounded-lg">
          {activeImageIndex + 1}/{images.length}
        </p>
        {/* Product information */}
        <ProductInformation
          product={product}
          count={count}
          setCount={setCount}
          save={save}
          tax={tax}
          code={code}
        />
      </section>
      {/* Description */}
      <section className="w-full px-6 md:w-4/5 bg-white shadow">
        <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
      </section>
      {/* Similar Productd */}
      <section>
        <p className=" border-b-2 mb-4 py-2 font-semibold text-sm mx-4 sm:mx-32 ">
          Similar products
        </p>
        <ProductGrid
          style={` pt-0 `}
          showSeeMore={true}
          initialDisplayCount={10}
        />
      </section>
    </main>
  );
};

export default ProductDetails;
