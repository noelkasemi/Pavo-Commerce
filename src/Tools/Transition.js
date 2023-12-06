import { useState } from "react";
import { Arrow } from "../Page/Partials/Imports";

const Carousel = ({ items, renderItem, duration = 0 }) => {
  // State to keep track of the current index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handler for moving to the previous item
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 4 ? items.length - 1 : prevIndex - 1
    );
  };

  // Handler for moving to the next item
  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex === items.length - 1 ? 0 : prevIndex + 1;

      // If the next index is 4, reset to 0 to create a looping effect
      if (nextIndex === 4) {
        setCurrentIndex(0);
      }

      return nextIndex;
    });
  };

  return (
    <section className="carousel-container">
      <main className="overflow-hidden">
        {/* Main flex container for the entire carousel */}
        <section className="flex items-center justify-center w-full">
          {/* Previous arrow button */}
          <Arrow
            onClick={handlePrev}
            style="w-10 h-10 rotate-90 cursor-pointer h-20 text-gray-700 rotate-180 mr-4"
          />
          {/* Container for the items with overflow hidden */}
          <section className="overflow-x-hidden lg:w-[1000px] sm:w-[670px] w-[full]">
            {/* Inner container with the transition and translation */}
            <section
              className={`carousel-container flex w-fit space-x-8 transition-transform ${
                duration === 0 ? 'duration-700' : ''
              } `}
              style={{ transform: `translateX(-${currentIndex * 308}px)` }}
            >
              {/* Map through items and render each item */}
              {items.map((item, index) => (
                <article
                  className="flex flex-col w-[300px] items-center space-y-4"
                  key={index}
                >
                  {renderItem(item)}
                </article>
              ))}
            </section>
          </section>
          {/* Next arrow button */}
          <Arrow
            onClick={handleNext}
            style="w-10 h-10 -rotate-90 cursor-pointer h-20 text-gray-700 ml-4"
          />
        </section>
      </main>
    </section>
  );
};

export default Carousel;
