// MainImage.js
import ReactImageMagnify from "react-image-magnify";
const MainImage = ({ isMobile, handleMainImageClick, images, activeImageIndex, product }) => {
    return (
      <>
        {isMobile ? (
          <img
            title={product.title}
            onClick={() => handleMainImageClick()}
            id="main-image"
            className="w-2/4 p-4 cursor-pointer"
            src={images[activeImageIndex]}
            alt={product.title}
          />
        ) : (
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
      </>
    );
  };
  
  export default MainImage;
  