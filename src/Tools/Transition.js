import { useState } from "react";
import { Arrow, Restart } from "../Page/Partials/Imports";

const Carousel = ({
  items,
  renderItem,
  duration = 0,
  itemsPerRow = 1,
  scroll = 1,
}) => {
  // State to keep track of the current index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Set initial state for isMobile based on the window width
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1020);
  
  //check if it is mobile to set scroll and items 1
  scroll = isMobile ? 1 : scroll;
  itemsPerRow = isMobile ? 1 : itemsPerRow;

  const handleStart = () => {
    setCurrentIndex(
      (prevIndex) => 0
    )
  }
  
  // Handler for moving to the previous item
  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => scroll == 1 ? (prevIndex - scroll + items.length) % (items.length) : (prevIndex == 0 ? (items.length / scroll - 1) : (prevIndex-1) % (items.length / scroll))
    );
  };

  // Handler for moving to the next item
  const handleNext = () => {
    setCurrentIndex(
      (prevIndex) => scroll == 1 ? ((prevIndex + scroll) % (items.length - itemsPerRow + 1)) : ((prevIndex+1) % ((items.length / scroll))) 
    );
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
          <section className="h-[300px]">
            <Arrow
              onClick={handlePrev}
              style="w-[30px] h-[30px] cursor-pointer h-20 text-gray-700 mr-4 h-full hover:bg-slate-100"
              type="left"
            />
          </section>
          {/* Container for the items with overflow hidden */}
          <section
            className={`overflow-x-hidden lg:w-[${containerSize}px] sm:w-[${containerSize - 1
              }] w-[${containerSize - 2}] w-[full]`}
          >
            {/* Inner container with the transition and translation */}
            <section
              className={`carousel-container flex transition-transform ${duration === 0 ? "duration-700" : ""
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
          <section className="h-[300px]">
            <Arrow
              onClick={handleNext}
              style="w-[30px] h-[30px] cursor-pointer h-20 text-gray-700 ml-4 h-full hover:bg-slate-100"
            />
          </section>
        </section>
          <section className="flex justify-center">
            <Restart
              onClick={handleStart}
              style={'mt-5 hover:rotate-[200deg] transition duration-300 float-right'}
            />
          </section>
      </main>
    </section>
  );
};

export default Carousel;