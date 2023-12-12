// ImageGallery.js

const ImageGallery = ({ images, activeImageIndex, handleImageClick, product }) => {
    return (
      <article className="flex lg:flex-col lg:w-fit w-full justify-center h-24 space-x-4 lg:space-x-0 lg:space-y-2 lg:mr-2">
        {images.map((image, index) => (
          <img
            key={index}
            className={`border p-4 w-[90px] h-20 cursor-pointer ${
              index === activeImageIndex ? "border-orange-500" : "border-black"
            }`}
            src={image}
            alt={product.title}
            onClick={() => handleImageClick(index)}
          />
        ))}
      </article>
    );
  };
  
  export default ImageGallery;
  