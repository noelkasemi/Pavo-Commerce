import { useState } from "react";
import { Arrow } from "../Page/Partials/Imports";

const Carousel = ({
  items,
  renderItem,
  duration = 0,
  itemsPerRow = 3,
  scroll = 1,
}) => {
  // State to keep track of the current index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handler for moving to the previous item
  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - scroll + items.length) % items.length
    );
  };

  // Handler for moving to the next item
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + scroll) % items.length);
  };

  let itemWidth = 330;
  //calculates the scroll amount
  let scrollAmount = itemWidth * scroll;
  //calculates the container's size
  let containerSize = itemWidth * itemsPerRow;

  return (
    <section className="carousel-container">
      <main className="overflow-hidden">
        {/* Main flex container for the entire carousel */}
        <section className="flex items-center justify-center w-full">
          {/* Previous arrow button */}
          <Arrow
            onClick={handlePrev}
            style="w-[30px] h-[30px] rotate-90 cursor-pointer h-20 text-gray-700 rotate-180 mr-4"
          />
          {/* Container for the items with overflow hidden */}
          <section
            className={`overflow-x-hidden lg:w-[${containerSize}px] sm:w-[${
              containerSize - 1
            }] w-[${containerSize - 2}] w-[full]`}
          >
            {/* Inner container with the transition and translation */}
            <section
              className={`carousel-container flex transition-transform ${
                duration === 0 ? "duration-700" : ""
              } `}
              style={{
                transform: `translateX(-${scrollAmount * currentIndex}px)`,
              }}
            >
              {/* Map through items and render each item */}
              {items.map((item, index) => (
                <article
                  className={`flex flex-col w-[${itemWidth}px] items-center px-8`}
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
            style="w-[30px] h-[30px] -rotate-90 cursor-pointer h-20 text-gray-700 ml-4"
          />
        </section>
      </main>
    </section>
  );
};

export default Carousel;
