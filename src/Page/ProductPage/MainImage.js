// MainImage.js
import ImageMagnifier from "../../Tools/ImageMagnifier"
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
        <ImageMagnifier
          width={350}
          src={images[activeImageIndex]}
        />
      )}
    </>
  );
};

export default MainImage;
