import Index from "./Page/index";
import Form from "./Tools/Form";
import Header from "./Page/Partials/Header";
import Footer from "./Page/Partials/Foter";
import Privacy from "./Page/Privacy";
import Terms from "./Page/Terms";
import Articles from "./Page/Articles";
import { useState } from "react";
import Main from "./Page/RecepiePage/main";

export default function App() {
  // State to check which page is and should be rendered
  const [currentPage, setCurrentPage] = useState("home");

  // Function to change the current page to the clicked one
  const navigateTo = (page) => {
    setCurrentPage(page);
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
        case 'recepie':
          return <Main />
      default:
        return <Index />;
    }
  };

  return (
    <div className="App  ">
      <Header navigateTo={navigateTo} currentPage={currentPage} />
       {renderPage()}
      <Footer navigateTo={navigateTo} />
    </div>
  );
}
