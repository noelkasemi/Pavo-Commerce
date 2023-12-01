
import React, { useState, useEffect, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Tooltip from "../../Tools/Tooltip";
import Arrow from "../../assets/Svg/arrow";
import InfoIcon from "../../assets/Svg/InfoIcon";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import PencilIcon from "../../assets/Svg/Pencil";
import TrashIcon from "../../assets/Svg/Trash";

const Main = ({
  searchQuery,
  cuisineOption,
  isClicked,
  diet,
  health,
  mealType,
  dishType,
}) => {
 // State variables
 const [recipes, setRecipes] = useState([]);
 const [selectedRecipe, setSelectedRecipe] = useState(null);
 const [error, setError] = useState(null);
 const [isOpen, setIsOpen] = useState(false);
 const [currentPage, setCurrentPage] = useState(1);
 const recipesPerPage = 8;
 const [isHoveredNext, setIsHoveredNext] = useState(false);
 const [isHoveredPrev, setIsHoveredPrev] = useState(false);
 const [isTooltipHovered, setIsTooltipHovered] = useState(false);
 const [isAdminView, setIsAdminView] = useState(false);
 const [editedRecipe, setEditedRecipe] = useState(null);
 const [editedTitle, setEditedTitle] = useState("");
 const [editingState, setEditingState] = useState({});

 // Fetch recipes data from the API based on various parameters
 useEffect(() => {
   const fetchData = async () => {
     try {
       let response;

       if (isClicked) {
         response = await fetch(
           // API endpoint for clicked recipes
           `https://api.edamam.com/api/recipes/v2?type=public&q=pasta&app_id=80ba8d2f&app_key=5a8094fcc947269724c967617293f177&ingr=1-30&diet=low-carb&health=${health}&cuisineType=${cuisineOption}&mealType=${mealType}&dishType=${dishType}&calories=100-10000`
         );
       } else {
         response = await fetch(
           // API endpoint for general recipes
           `https://api.edamam.com/api/recipes/v2?type=public&q=${searchQuery}&app_id=80ba8d2f&app_key=5a8094fcc947269724c967617293f177&calories=100-10000`
         );
       }

       if (!response.ok) {
         throw new Error(`HTTP error! Status: ${response.status}`);
       }

       const data = await response.json();
       setRecipes(data.hits);
     } catch (error) {
       setError(error.message);
     }
   };

   fetchData();
 }, [searchQuery, cuisineOption, isClicked, diet, health, mealType, dishType]);

 // Pagination calculations
 const indexOfLastRecipe = currentPage * recipesPerPage;
 const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
 const currentRecipes = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe);

 // Function to handle pagination
 const paginate = (pageNumber) => {
   setCurrentPage(pageNumber);
 };

 // Error handling
 if (error) {
   return <div>Error: {error}</div>;
 }

 // Function to close the modal
 const closeModal = () => {
   setIsOpen(false);
 };

 // Function to open the modal with a selected recipe
 const openModal = (recipe) => {
   setSelectedRecipe(recipe);
   setIsOpen(true);
 };

 // Function to handle recipe editing
 const handleEdit = (recipe) => {
   setEditedRecipe(recipe);
   setEditedTitle(recipe.recipe.label);

   // Update the editing state for the specific recipe
   setEditingState((prevState) => ({
     ...prevState,
     [recipe.recipe.uri]: true,
   }));
 };

 // Function to save the changes after editing a recipe
 const handleSave = () => {
   const updatedRecipes = recipes.map((r) =>
     r === editedRecipe
       ? { ...r, recipe: { ...r.recipe, label: editedTitle } }
       : r
   );
   setRecipes(updatedRecipes);

   // Reset editing-related state
   setEditingState((prevState) => ({
     ...prevState,
     [editedRecipe.recipe.uri]: false,
   }));
   setEditedRecipe(null);
 };

 // Function to discard changes while editing a recipe
 const handleDiscard = () => {
   // Reset editing-related state
   setEditingState((prevState) => ({
     ...prevState,
     [editedRecipe.recipe.uri]: false,
   }));
   setEditedRecipe(null);
 };

 // Function to handle recipe deletion
 const handleDelete = (recipeToDelete) => {
   if (!recipeToDelete || !recipeToDelete.recipe || !recipeToDelete.recipe.uri) {
     return;
   }

   // Filter out the selected recipe from the recipes list
   const updatedRecipes = recipes.filter(
     (recipe) => recipe.recipe.uri !== recipeToDelete.recipe.uri
   );
   setRecipes(updatedRecipes);
 };


 return (
  <>
    {/* Checkbox section to toggle between Administrator and Moderator views */}
    <section className="flex space-x-8 w-full justify-center">
      <article>
        <label>
          <input
            type="checkbox"
            checked={isAdminView}
            onChange={() => setIsAdminView(!isAdminView)}
          />
          View as Administrator
        </label>
      </article>
      <article>
        <label>
          <input
            type="checkbox"
            onChange={() => setIsAdminView(false)}
          />
          View as Moderator
        </label>
      </article>
    </section>

    {/* Recipe display section */}
    <div className="inset-0 flex items-center justify-center">
      <div className="w-full">
        <div className="flex justify-end items-center mr-24 space-x-8 mb-4">
          {/* Pagination controls with tooltips */}
          {currentPage > 1 ? (
            <Tooltip
              show={isHoveredPrev}
              onMouseEnter={() => setIsHoveredPrev(true)}
              onMouseLeave={() => setIsHoveredPrev(false)}
              buttonStyle={`rotate-90 `}
              onClick={() => paginate(currentPage - 1)}
              buttonChildren={<Arrow style={`w-6 h-6 text-[#AAAAAA] `} />}
              panelStyle={`w-[70px] font-serif  -translate-y-14 text-sm  absolute z-10`}
            >
              <p className="bg-white  rounded px-3 py-1 -translate-x-4 -translate-y-1">
                {`Page ${currentPage - 1}`}
              </p>
            </Tooltip>
          ) : (
            ""
          )}
          {indexOfLastRecipe <= recipes.length ? (
            <Tooltip
              show={isHoveredNext}
              onMouseEnter={() => setIsHoveredNext(true)}
              onMouseLeave={() => setIsHoveredNext(false)}
              buttonStyle={`-rotate-90 ml-10`}
              onClick={() => paginate(currentPage + 1)}
              buttonChildren={<Arrow style={`w-6 h-6 text-[#AAAAAA]`} />}
              panelStyle={`w-[70px] font-serif  -translate-y-14 text-sm  absolute z-10`}
            >
              <p className="bg-white  rounded px-3 py-1 translate-x-4 -translate-y-1">
                {`Page ${currentPage + 1}`}
              </p>
            </Tooltip>
          ) : (
            ""
          )}
        </div>

        {/* Recipe cards */}
        <ul className="grid grid-cols-4 gap-y-8 px-4 justify-items-center">
          {currentRecipes.map((recipe) => (
            <li
              key={recipe.recipe.uri}
              title={recipe.recipe.label}
              className="bg-[#242424] shadow-[3px_5px_7px_1px_#dfdfdfcc] w-[250px] flex flex-col hover:shadow-[10.0px_10.0px_12.0px_rgba(163,163,163,0.38)] hover:brightness-90 rounded-b cursor-pointer "
            >
              {/* Recipe image */}
              <img
                onClick={() => {
                  openModal(recipe);
                }}
                src={recipe.recipe.image}
                alt={recipe.recipe.label}
                width={300}
                className="h-44 aspect-auto object-cover rounded"
              />

              {/* Recipe details */}
              <h2 className="px-4">
                <p className="text-red-700 font-semibold">
                  {recipe.recipe.source}
                </p>

                {/* Editable title input if in editing state */}
                {editingState && editedRecipe === recipe && isAdminView ? (
                  <input
                    type="text"
                    value={editedTitle}
                    onChange={(e) => setEditedTitle(e.target.value)}
                    className="font-bold rounded bg-black border border-slate-600 text-neutral-400  text-lg px-2 flex w-full"
                  />
                ) : (
                  // Display recipe title
                  <p className="font-bold text-[#AAAAAA] text-2xl flex">
                    {recipe.recipe.label}
                  </p>
                )}

                {/* Display calories */}
                <p className="text-[#AAAAAA]">
                  calories: {recipe.recipe.calories.toFixed()}
                </p>

                {/* Admin controls for editing and deleting */}
                {isAdminView && (
                  <article className="flex text-[#AAAAAA] my-2 space-x-4 w-full justify-center">
                    {editingState[recipe.recipe.uri] ? (
                      // If in editing state, show save and undo buttons
                      <>
                        <button
                          onClick={handleSave}
                          className={`text-green-500 text-xl hover:text-green-400`}
                        >
                          Save
                        </button>
                        <button
                          onClick={() => handleDiscard(selectedRecipe)}
                          className={`text-red-500 text-xl hover:text-red-400`}
                        >
                          Undo
                        </button>
                      </>
                    ) : (
                      // If not in editing state, show edit and delete buttons
                      <>
                        <PencilIcon
                          onClick={() => handleEdit(recipe)}
                          style={`hover:text-blue-400`}
                        />
                        <TrashIcon
                          onClick={() => handleDelete(recipe)}
                          style={`hover:text-red-400`}
                        />
                      </>
                    )}
                  </article>
                )}
              </h2>
            </li>
          ))}
        </ul>
      </div>
    </div>

    {/* Recipe modal */}
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full  max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                {selectedRecipe && (
                  <>
                    {/* Display modal content */}
                    {selectedRecipe.recipe.image && (
                      <article className="">
                        <img
                          src={selectedRecipe.recipe.image}
                          alt={selectedRecipe.recipe.label}
                          className="h-44 w-full aspect-auto object-cover rounded mb-4"
                        />
                        <h2 className="px-4">
                          <p className="text-red-700 font-semibold flex">
                            {selectedRecipe.recipe.source}
                            {/* Tooltip for nutrition information */}
                            <Tooltip
                              show={isTooltipHovered}
                              buttonChildren={
                                <InfoIcon
                                  style={`mt-1 ml-2 w-5 h-5 cursor-pointer text-black`}
                                />
                              }
                              onMouseEnter={() => setIsTooltipHovered(true)}
                              onMouseLeave={() => setIsTooltipHovered(false)}
                              panelStyle={`w-[330px] -translate-x-36 text-[#AAAAAA] h-16 rounded-lg bg-[#242424] absolute`}
                            >
                              {isTooltipHovered && (
                                <div className="px-2 ">
                                  <h3 className="text-white text-sm text-center">
                                    Nutrition
                                  </h3>
                                  <ul className="flex text-xs mt-1 space-x-4">
                                    <li className="text-[#AAAAAA]">
                                      Calories:{" "}
                                      {selectedRecipe.recipe.totalNutrients.ENERC_KCAL.quantity.toFixed(
                                        2,
                                      )}{" "}
                                      {
                                        selectedRecipe.recipe.totalNutrients
                                          .ENERC_KCAL.unit
                                      }
                                    </li>
                                    <li className="text-[#AAAAAA]">
                                      Protein:{" "}
                                      {selectedRecipe.recipe.totalNutrients.PROCNT.quantity.toFixed(
                                        2,
                                      )}{" "}
                                      {
                                        selectedRecipe.recipe.totalNutrients
                                          .PROCNT.unit
                                      }
                                    </li>
                                    <li className="text-[#AAAAAA]">
                                      Carbohydrates:{" "}
                                      {selectedRecipe.recipe.totalNutrients.CHOCDF.quantity.toFixed(
                                        2,
                                      )}{" "}
                                      {
                                        selectedRecipe.recipe.totalNutrients
                                          .CHOCDF.unit
                                      }
                                    </li>
                                    <li className="text-[#AAAAAA]">
                                      Fat:{" "}
                                      {selectedRecipe.recipe.totalNutrients.FAT.quantity.toFixed(
                                        2,
                                      )}{" "}
                                      {
                                        selectedRecipe.recipe.totalNutrients
                                          .FAT.unit
                                      }
                                    </li>
                                  </ul>
                                </div>
                              )}
                            </Tooltip>
                          </p>
                          <p className="font-bold text-2xl flex">
                            {selectedRecipe.recipe.label}
                          </p>
                        </h2>
                      </article>
                    )}
                    <div className="w-full">
                      <div className=" w-full max-w-md rounded-2xl bg-white p-2">
                        {/* Disclosure for Ingredients */}
                        <Disclosure as="div" className="mt-2">
                          {({ open }) => (
                            <>
                              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-blue-100 px-4 py-2 text-left text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
                                <span>Ingredients </span>
                                <ChevronUpIcon
                                  className={`${
                                    open ? "rotate-180 transform" : ""
                                  } h-5 w-5 text-blue-500`}
                                />
                              </Disclosure.Button>
                              <Disclosure.Panel className="h-24 text-sm text-gray-500">
                                <ul className="my-2 list-disc ml-4 h-full overflow-auto">
                                  {selectedRecipe.recipe.ingredients.map(
                                    (ingredient, index) => (
                                      <li key={index}>
                                        <span className="mr-2">&#8226;</span>{" "}
                                        {ingredient.text}
                                      </li>
                                    ),
                                  )}
                                </ul>
                              </Disclosure.Panel>
                            </>
                          )}
                        </Disclosure>
                      </div>
                    </div>
                  </>
                )}
                {/* Close button */}
                <button
                  type="button"
                  className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 mt-4 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  onClick={closeModal}
                >
                  Close
                </button>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  </>
)};
export default Main;