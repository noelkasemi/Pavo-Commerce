// Import React components
import Index from "./Page/index";
import Form from "./Tools/Form";
import Header from "./Page/Partials/Header";
import Footer from "./Page/Partials/Footer";
import Privacy from "./Page/Privacy";
import Terms from "./Page/Terms";
import Articles from "./Page/Articles";
import { useState } from "react";
import Main from "./Page/RecepiePage/main";
import RecepieDetails from "./Page/RecepiePage/RecepieDetails";

export default function App() {
  // State to check which page is and should be rendered
  const [currentPage, setCurrentPage] = useState("home");
  const [currentLang, setCurrentLang] = useState("English");
  const [showRecipePage, setShowRecipePage] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  // Function to change the language of the page
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

  // Object mapping page names to their corresponding components
  const pageComponents = {
    home: <Index />,
    signup: <Form navigateTo={navigateTo} type="signup" />,
    login: <Form navigateTo={navigateTo} type="login" />,
    privacy: <Privacy />,
    terms: <Terms />,
    articles: <Articles />,
    contact: <Form type="contact" />,
    recepie: !showRecipePage ? (
      <Main navigateToDetails={navigateToDetails} currentLang={currentLang} />
    ) : (
      <RecepieDetails
        recepie={selectedRecipe}
        navigateBack={() => setShowRecipePage(false)}
      />
    ),
  };

  // Function to render the current page component
  const renderPage = () => pageComponents[currentPage] || <Index />;

  // Render the main structure of the app
  return (
    <div className="App  ">
      {/* Header component with navigation and language change functionality */}
      <Header
        navigateTo={navigateTo}
        changeLangTo={changeLangTo}
        currentPage={currentPage}
      />

      {/* Render the current page component */}
      {renderPage()}

      {/* Footer component with navigation functionality */}
      <Footer navigateTo={navigateTo} />
    </div>
  );
}
