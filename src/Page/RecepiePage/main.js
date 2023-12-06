import {
  React,
  Dialog,
  Transition,
  Tooltip,
  Arrow,
  InfoIcon,
  Disclosure,
  ChevronUpIcon,
  PencilIcon,
  TrashIcon,
  Bookmark,
  Lock,
  SearchIcon,
  useState,
  useEffect,
  Fragment,
} from "../Partials/Imports";

const Main = ({ navigateToDetails, currentLang }) => {
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
  const [isModView, setIsModView] = useState(false);
  const [isGuestView, setIsGuestView] = useState(false);
  const [isUserView, setIsUserView] = useState(false);
  const [editedRecipe, setEditedRecipe] = useState(null);
  const [editedTitle, setEditedTitle] = useState("");
  const [editingState, setEditingState] = useState({});
  const [searchQuery, setSearchQuery] = useState("pasta");
  const [isYouAdmin, setIsYouAdmin] = useState(false);
  const [notAdmin, setNotAdmin] = useState(false);

  console.log(currentLang)
  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Fetch recipes data from the API based on various parameters
  useEffect(() => {
    const fetchData = async () => {
      try {
        let response;

        response = await fetch(
          // API endpoint for general recipes
          `https://api.edamam.com/api/recipes/v2?type=public&q=${searchQuery}&app_id=80ba8d2f&app_key=5a8094fcc947269724c967617293f177&calories=100-10000`
        );

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
  }, [searchQuery]);

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
    !isGuestView && navigateToDetails(recipe);
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
    if (
      !recipeToDelete ||
      !recipeToDelete.recipe ||
      !recipeToDelete.recipe.uri
    ) {
      return;
    }

    // Filter out the selected recipe from the recipes list
    const updatedRecipes = recipes.filter(
      (recipe) => recipe.recipe.uri !== recipeToDelete.recipe.uri
    );
    setRecipes(updatedRecipes);
  };

  const handleAdminChange = (admin) => {
    setIsYouAdmin(admin === "yes");
    setNotAdmin(admin === "no");
  };

  const handleRadioChange = (viewType) => {
    setIsAdminView(viewType === "admin");
    setIsModView(viewType === "moderator");
    setIsUserView(viewType === "user");
    setIsGuestView(viewType === "guest");
  };


  return (
    <>
      <h2 className="font-bold text-2xl text-center font-serif text-black">
        {currentLang === "English"
          ? "Search your favorite food and get the recipe in seconds"
          : "Kerko ushqimin tuaj te preferuar dhe gjej receten ne sekonda"}
      </h2>
      <article className="flex mb-4 w-full sm:pl-4 justify-center mt-2">
        <SearchIcon
          style={`absolute mt-[8px] -translate-x-[350px] mr-4 w-[20px] text-slate-400 h-[20px]`}
        />
        <input
          placeholder="Search your favorite food..."
          type="text"
          className="outline-none px-2 pl-10 bg-black border border-slate-600 text-neutral-400 py-1 rounded w-full sm:w-1/2 "
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
      </article>
      <article className="w-full flex flex-col items-center justi">
        <h2 className="text-2xl font-bold">Are you admin?</h2>
        <section className="space-x-8">
          {" "}
          <label>
            Yes{" "}
            <input
              checked={isYouAdmin}
              type="radio"
              onChange={() => {
                name = "admin";
                handleAdminChange("yes");
                setIsYouAdmin(!isYouAdmin);
              }}
            />
          </label>
          <label>
            No{" "}
            <input
              name="admin"
              type="radio"
              checked={notAdmin}
              onChange={() => {
                handleAdminChange("no");
                setNotAdmin(!notAdmin)
              }}
            />
          </label>
        </section>
      </article>
      {/* Checkbox section to toggle between Administrator Moderator User and Guest views */}
      {isYouAdmin && (
        <section className="flex flex-wrap space-x-8 w-full justify-center">
          <label className="">
            <input
              type="radio"
              name="viewType"
              checked={isAdminView}
              onChange={() => {
                handleRadioChange("admin");
                setIsAdminView(!isAdminView);
              }}
            />{" "}
            View as Administrator
          </label>

          <label>
            <input
              type="radio"
              name="viewType"
              checked={isModView}
              onChange={() => {
                handleRadioChange("moderator");
                setIsModView(!isModView);
              }}
            />{" "}
            View as Moderator
          </label>

          <label>
            <input
              type="radio"
              name="viewType"
              checked={isUserView}
              onChange={() => {
                handleRadioChange("user");
                setIsUserView(!isUserView);
              }}
            />{" "}
            View as User
          </label>

          <label>
            <input
              type="radio"
              name="viewType"
              checked={isGuestView}
              onChange={() => {
                handleRadioChange("guest");
                setIsGuestView(!isGuestView);
              }}
            />{" "}
            View as Guest
          </label>
        </section>
      )}

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
                buttonStyle={` `}
                onClick={() => paginate(currentPage + 1)}
                buttonChildren={
                  <Arrow style={` -rotate-90 w-6 h-6 text-[#AAAAAA]`} />
                }
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
          <ul className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-4 gap-y-8 justify-items-center">
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
                  {editingState &&
                  editedRecipe === recipe &&
                  (isAdminView || isModView) ? (
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
                  {isAdminView ? (
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
                  ) : isModView ? (
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
                        // If not in editing state, show edit buttons
                        <PencilIcon
                          onClick={() => handleEdit(recipe)}
                          style={`hover:text-blue-400`}
                        />
                      )}
                    </article>
                  ) : isUserView ? (
                    <Bookmark
                      fill={`hover:gray`}
                      style={`text-[#AAAAAA] absolute translate-x-28 -translate-y-[25px]`}
                    />
                  ) : (
                    ""
                  )}
                </h2>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Recipe modal */}
      {(isGuestView || notAdmin) && (
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
                                  <Disclosure.Button
                                    disabled={isGuestView}
                                    className="flex w-full justify-between rounded-lg bg-blue-100 px-4 py-2 text-left text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                  >
                                    <span>"Log in to view Ingredients"</span>

                                    <Lock style={`h-5 w-5 text-blue-500`} />
                                  </Disclosure.Button>
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
      ) }
    </>
  );
};
export default Main;
