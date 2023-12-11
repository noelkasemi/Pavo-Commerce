import { useState, useEffect } from "react";
import { Tab } from "@headlessui/react";
import ReactImageMagnify from "react-image-magnify";
import Table from "../../Tools/Table";
import { CreditCard, Star,Cart,Heart,ConclusionSmartphone,Money,DoubleCards,BlackCard,Details1} from "../Partials/Imports";
import ProductGrid from "./ProductGrid";

const ProductDetails = ({ product, navigateBack, navigateTo }) => {
  const tabs = {
    Description: product.description,
    Details: <Table />,
    Rating: (
      <section className="flex border-b pb-4">
        <article className="w-1/2 flex space-y-2 flex-col items-center">
          {" "}
          <p className="flex text-2xl font-semibold text-[#e65228] items-center">
            {" "}
            {product.rating.rate}
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
  //calculates the price after a discount
  const save = (product.price / 100) * 50;
  //State to keep track of the active tab
  const [activeTab, setActiveTab] = useState("Description");
  //generates a random code , symbolises the product id
  const code =
    ((min, max) => Math.floor(Math.random() * (max - min + 1)) + min)(
      1000,
      10000
    ) * product.id;
    //generates a random number to symbolises the tax on product 
  const tax = ((min, max) => Math.floor(Math.random() * (max - min + 1)) + min)(
    1,
    10
  );
  //State to keep track of the count and to change it accordingly
  const [count, setCount] = useState(1);
  const images = [product.image, Details1, ConclusionSmartphone];
  // State to keep track of the active image
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  // Set initial state for isMobile based on the window width
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1020);

  // Update isMobile state on window resize
  useEffect(() => {
    // Event handler to update isMobile based on the current window width
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1020);
    };

    // Attach the resize event listener when the component mounts
    window.addEventListener("resize", handleResize);

    // Remove the event listener when the component unmounts to avoid memory leaks
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

  return (
    <main className=" bg-[#f7f7f7] space-y-16 flex flex-col w-full items-center justify-center pt-20">
     {/* Back button */}
      <button
        className="inline-flex rounded-md border border-transparent bg-blue-100 px-6 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
        onClick={navigateBack}
      >
        Back
      </button>
      <section className="flex flex-col items-center lg:flex-row rounded-lg w-full lg:w-4/5 p-4 shadow-lg">
     {/* Images of the product */}
        <article className="flex lg:flex-col lg:w-fit w-full justify-center h-24 space-x-4 lg:space-x-0 lg:space-y-2 lg:mr-2">
          {images.map((image, index) => (
            <img
              key={index}
              className={`border p-4 w-[90px] h-20 cursor-pointer ${
                index === activeImageIndex
                  ? "border-orange-500"
                  : "border-black"
              }`}
              src={image}
              alt={product.title}
              onClick={() => handleImageClick(index)}
            />
          ))}
        </article>
        {/* Main image of the product without magnifying functionality */}
        {isMobile ? (
          <img
          title={product.title}
          onClick={() => handleMainImageClick()}
          id="main-image"
            className="w-2/4 p-4 cursor-pointer"
            src={images[activeImageIndex]}
            alt={product.title}
          />
        ) :
         (
        //  Main image of the product with magnifying functionality
          <ReactImageMagnify
            {...{
              smallImage: {
                alt: "",
                isFluidWidth: true,
                src: images[activeImageIndex],
              },
              largeImage: {
                src: images[activeImageIndex],
                width: 1200,
                height: 800,
              },
            }}
          />
        )}
            {/* number of images */}
        <p className="absolute bg-[#e8e8e8] py-2 px-8 left-2 sm:left-0 lg:left-44 font-semibold top-[267px] sm:top-44  rounded-lg">
          {activeImageIndex + 1}/{images.length}
        </p>
            {/* Product information */}
        <article className="space-y-4 lg:ml-5 lg:w-2/4">
          <h2 className="font-bold text-2xl font-serif">{product.title}</h2>
          <article className="flex space-x-4">
            <li>Warranty: 1 year</li> <li>Code: {code}</li>{" "}
          </article>

          <article className="flex flex-col ">
            <p className="line-through text-medium text-slate-500">
              ${product.price}
            </p>
            <p className="flex items-center font-semibold text-3xl">
              ${((product.price / 100) * 50).toFixed(0)}
              <p className="text-sm ml-4 text-slate-600">
                Including tax
                <p>Without tax {(save - tax).toFixed()}$</p>
              </p>
            </p>
            <p className="text-[#e65228] flex">
              You save {save.toFixed()}${" "}
              <p className=" rounded-lg ml-1 font-semibold px-1 bg-[#fcede9]">
                {" "}
                -50%
              </p>{" "}
            </p>
          </article>
          <article className="flex items-center space-x-2 border-2 w-full rounded py-2 px-2">
            <CreditCard style={`w-14 h-fit`} />
            <CreditCard style={`w-14 h-fit`} />
            <p className="font-semibold text-sm">
              up to 12 installments without interest for only{" "}
              <strong className="text-[#e65228] font-medium ">
                {(save / 12).toFixed()}$/month
              </strong>{" "}
            </p>
          </article>
          <p className="font-semibold text-sm border-t-2 pt-2 w-full">
            {" "}
            Quantity{" "}
          </p>
          <article className="flex items-center">
            <button
              className="border rounded-l px-4 text-2xl py-2"
              disabled={count === 1}
              onClick={() => setCount(count - 1)}
            >
              -
            </button>
            <p className="border-2 px-6  py-2 font-semibold text-lg">{count}</p>
            <button
              className="border px-4 rounded-r py-2 text-2xl"
              onClick={() => setCount(count + 1)}
            >
              +
            </button>
          </article>
          <p className="font-semibold text-sm border-t-2 pt-2 w-full">
            Secure Payments
          </p>
          <article className="flex flex-col sm:flex-row justify-between px-4">
            <p className="flex items-center font-semibold text-sm">
              <Money style={`bg-[#fcede9] p-2 w-9 h-9 mr-2 text-[#e65228]`} />{" "}
              Pay Cash
            </p>
            <p className="flex items-center font-semibold text-sm">
              <BlackCard
                style={`bg-[#fcede9] p-2 w-9 h-9 mr-2 text-[#e65228]`}
              />{" "}
              Pay online
            </p>
            <p className="flex items-center font-semibold text-sm">
              <DoubleCards style="bg-[#fcede9] p-2 w-9 h-9 mr-2 text-[#e65228]" />{" "}
              Pay with bank transfer
            </p>
          </article>
          <article className="flex space-x-4 sm:px-8 h-12">
            <button className="w-full bg-[#e65228] hover:brightness-90 text-white  font-semibold rounded">
              Buy now
            </button>
            <button className="w-full flex items-center justify-center bg-white font-semibold hover:brightness-90 border-black border rounded">
              <Cart style={`w-8 h-8 mr-2`} /> Add to cart
            </button>
            <button className="bg-white rounded hover:outline outline-1 p-4">
              {" "}
              <Heart />
            </button>
          </article>
        </article>
      </section>
      {/* Description */}
      <section className="w-full px-6 md:w-4/5 bg-white shadow">
        <Tab.Group>
          <Tab.List className="flex border-b-2 border-slate-200 w-full">
            {Object.keys(tabs).map((tab) => (
              <Tab
                key={tab}
                className={({ selected }) =>
                  `w-full outline-none py-2.5 text-sm font-medium  ${
                    selected
                      ? "border-b-2  border-orange-400 text-black "
                      : " text-black hover:bg-slate-200"
                  }`
                }
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-2 ">
            {Object.entries(tabs).map(([tab, content], idx) => (
              <Tab.Panel
                key={idx}
                className={`${
                  idx === 2 ? "space-x-4" : ""
                } bg-white p-3 outline-none`}
              >
                {content}
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </section>
      {/* Similar Productd */}
      <section>
        <p className=" border-b-2 mb-4 py-2 font-semibold text-sm mx-4 sm:mx-32 ">
          Similar products
        </p>
        <ProductGrid navigateTo={navigateTo} style={` pt-0 `} showSeeMore={true} initialDisplayCount={10} />
      </section>
    </main>
  );
};

export default ProductDetails;
