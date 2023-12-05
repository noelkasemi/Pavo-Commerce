import Index from "./Page/index";
import Form from "./Tools/Form";
import Header from "./Page/Partials/Header";
import Footer from "./Page/Partials/Foter";
import Privacy from "./Page/Privacy";
import Terms from "./Page/Terms";
import Articles from "./Page/Articles";
import { useState } from "react";
import Main from "./Page/RecepiePage/main";
import RecepieDetails from "./Page/RecepiePage/RecepieDetails";

export default function App() {
  // State to check which page is and should be rendered
  const [currentPage, setCurrentPage] = useState("home");
  const [currentLang, setCurrentLang] = useState("english");
  const [showRecipePage, setShowRecipePage] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  //Function to change the language of the page
  const changeLangTo = (lang) => {
    setCurrentLang(lang);
  };

  // Function to change the current page to the clicked one
  const navigateTo = (page) => {
    setCurrentPage(page);
    setShowRecipePage(false);
  };

  // Callback to show recipe details page
  const navigateToDetails = (recipe) => {
    setSelectedRecipe(recipe);
    setShowRecipePage(true);
  };

  // Switch Case to render the page based on what the user clicks
  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Index />;
      case "signup":
        return <Form navigateTo={navigateTo} type={`signup`} />;
      case "login":
        return <Form navigateTo={navigateTo} type={`login`} />;
      case "privacy":
        return <Privacy />;
      case "terms":
        return <Terms />;
      case "articles":
        return <Articles />;
      case "contact":
        return <Form type={`contact`} />;
      case "recepie":
        return (
         !showRecipePage ? <Main
            navigateToDetails={navigateToDetails}
            currentLang={currentLang}
          />
          :           <RecepieDetails
          recepie={selectedRecipe}
          navigateBack={() => setShowRecipePage(false)}
        />
        );

      default:
        return <Index />;
    }
  };

  return (
    <div className="App  ">
      <Header
        navigateTo={navigateTo}
        changeLangTo={changeLangTo}
        currentPage={currentPage}
      />
      {renderPage()}

      <Footer navigateTo={navigateTo} />
    </div>
  );
}
