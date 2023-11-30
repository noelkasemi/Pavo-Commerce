
import React, { useState } from "react";
import Main from "./main";
import MyListbox from "../../Tools/Listbox";
import Data from "../../Data/RecepieData.json";
import SearchIcon from "../../assets/Svg/SearchIcon";
import { Filter } from "../../assets/Svg/FilterIcon";
import Arrow from "../../assets/Svg/arrow";
import Tooltip from "../../Tools/Tooltip";
import Bell from "../../assets/Svg/Bell";
import CheckIcon from "../../assets/Svg/CheckIcon";

const Recepie = () => {
  const [searchQuery, setSearchQuery] = useState("pasta");
  const [selectedCuisine, setSelectedCuisine] = useState(Data.cuisineTypes[0]);
  const [selectedDish, setSelectedDish] = useState(Data.dishTypes[0]);
  const [selectedMeal, setSelectedMeal] = useState(Data.mealTypes[0]);
  const [selectedHealth, setSelectedHealth] = useState(Data.health[0]);
  const [selectedDiet, setSelectedDiet] = useState(Data.diet[0]);
  const [isClicked, setIsClicked] = useState(false);
  const [isBellClicked, setIsBellClicked] = useState(false);

  const handleCuisineSelection = (selectedValue) => {
    setSelectedCuisine(selectedValue);
  };

  const handleDishSelection = (selectedValue) => {
    setSelectedDish(selectedValue);
  };

  const handleMealSelection = (selectedValue) => {
    setSelectedMeal(selectedValue);
  };

  const handleHealthSelection = (selectedValue) => {
    setSelectedHealth(selectedValue);
  };

  const handleDietSelection = (selectedValue) => {
    setSelectedDiet(selectedValue);
  };

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div>
      <header className="fixed w-full top-0 z-40">
        <nav className="bg-[#0E0E0E]  flex  items-center">
          <img
            src="https://uploads-ssl.webflow.com/5773cfeac8d072ad1d609dcd/5773db40b411727174e0bb02_osteria%2060%20logo.png"
            alt="Osteria 60"
            className="h-16 ml-4 w-[300px]"
          />
          <article className="flex w-full pl-4 justify-center mt-2">
            <SearchIcon
              style={`absolute mt-[8px] -translate-x-[214px] mr-4 w-[20px] text-slate-400 h-[20px]`}
            />
            <Filter
              onClick={() => {
                setIsClicked(!isClicked);
              }}
              style={`absolute z-20 text-slate-500 translate-x-[415px] cursor-pointer mt-2 w-[20px] h-[20px]`}
            >
              <p
                onClick={() => {
                  setIsClicked(!isClicked);
                }}
                className="cursor-pointer absolute z-40 text-slate-400 translate-x-[440px] mt-[8px] text-sm"
              >
                Filter
              </p>{" "}
            </Filter>
            <input
              placeholder="Search your favorite food..."
              type="text"
              className="outline-none px-2 pl-10 bg-black border border-slate-600 text-neutral-400 py-1 rounded w-1/2 "
              value={searchQuery}
              onChange={handleSearchInputChange}
            />
          </article>
          <ul className="flex text-white space-x-8 mr-8">
            <li className="cursor-pointer hover:text-[#CEC583] text-xl">
              Home
            </li>
            <li className="cursor-pointer hover:text-[#CEC583] text-xl">
              Recipes
            </li>
            <li className="cursor-pointer hover:text-[#CEC583] text-xl">
              About
            </li>
            <Tooltip
              buttonStyle={`mt-1`}
              onClick={() => setIsBellClicked(!isBellClicked)}
              show={isBellClicked}
              panelStyle={`absolute bg-[#242424] text-sm w-[300px] -translate-x-[260px] rounded-lg h-[90px] px-4`}
              buttonChildren={<Bell style={`hover:text-[#CEC583]`} />}
            >
              {isBellClicked ? (
                <article className="">
                  <section className="flex justify-between pt-2">
                    <p className=" border-b pb-2 ">News</p>{" "}
                    <p className="text-[#666666] text-sm mt-2 cursor-pointer hover:text-neutral-400 flex">
                      <CheckIcon style={`w-[20px] mt-[px] mr-1 h-[20px]`} />
                      Mark as read
                    </p>
                  </section>
                  <p className="mt pt-[10px]  text-center text-[#666666] border-t border-[#363636]">
                    There is no new notifications
                  </p>
                </article>
              ) : (
                ""
              )}
            </Tooltip>
          </ul>
        </nav>
      </header>
      <main className="pt-[80px] py-6 bg-[#1C1C1C]">
        <label className="mt-2 flex flex-col justify-center items-center mt-4 mb-4">
          <h2 className="font-bold text-2xl  font-serif text-[#AAAAAA]">
            Search your favorite food and get the recipe in seconds
          </h2>
          {isClicked && (
            <article className="flex ">
              <MyListbox
                listName={Object.keys(Data)[0]}
                listData={Data.cuisineTypes}
                selectedValue={selectedCuisine}
                setSelectedValue={handleCuisineSelection}
              >
                {" "}
                <Arrow style={`w-4 h-4 mt-1 ml-1`} />{" "}
              </MyListbox>
              <MyListbox
                listName={Object.keys(Data)[1]}
                listData={Data.diet}
                selectedValue={selectedDiet}
                setSelectedValue={handleDietSelection}
              >
                {" "}
                <Arrow style={`w-4 h-4 mt-1 ml-1`} />{" "}
              </MyListbox>
              <MyListbox
                listName={Object.keys(Data)[4]}
                listData={Data.dishTypes}
                selectedValue={selectedDish}
                setSelectedValue={handleDishSelection}
              >
                {" "}
                <Arrow style={`w-4 h-4 mt-1 ml-1`} />{" "}
              </MyListbox>
              <MyListbox
                listName={Object.keys(Data)[2]}
                listData={Data.health}
                selectedValue={selectedHealth}
                setSelectedValue={handleHealthSelection}
              >
                {" "}
                <Arrow style={`w-4 h-4 mt-1 ml-1`} />{" "}
              </MyListbox>
              <MyListbox
                listName={Object.keys(Data)[3]}
                listData={Data.mealTypes}
                selectedValue={selectedMeal}
                setSelectedValue={handleMealSelection}
              >
                {" "}
                <Arrow style={`w-4 h-4 mt-1 ml-1`} />{" "}
              </MyListbox>
            </article>
          )}
        </label>
        <Main
          searchQuery={searchQuery}
          cuisineOption={selectedCuisine}
          isClicked={isClicked}
          health={selectedHealth}
          mealType={selectedMeal}
          diet={selectedDiet}
          dishType={selectedDish}
        />
      </main>
      <footer className="bg-gray-800 text-white py-8 ">
        <div className="container mx-auto flex justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Explore More Recipes</h2>
            <p className="text-gray-300">
              Discover a variety of delicious recipes for every occasion.
            </p>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4">
          <div className="container mx-auto flex justify-between">
            <p className="text-gray-500">© 2023 Osteria 60</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Recepie;
