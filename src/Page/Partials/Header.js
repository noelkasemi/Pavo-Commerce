import Logo from "../../assets/Svg/logo.svg";
import HeaderSmartphone from "../../assets/Images/header-smartphone.png";
import Tooltip from "../../Tools/Tooltip";
import { useState, useEffect } from "react";
import Arrow from "../../assets/Svg/arrow";


export default function Header({ navigateTo, currentPage }) {
  // State for tracking hover state of the tooltip
  const [isHovered, setIsHovered] = useState(false);

  // useEffect to handle side effects related to navigation changes
  useEffect(() => {
    //  scrolls to the top of the page when the navigation changes
    window.scrollTo(0, 0);
  }, [currentPage]); // This effect will run when currentPage changes

  // Function to render the additional section if the component rendered is not one of the forms
  const renderAdditionalSection = () => {
    if (
      currentPage === "signup" ||
      currentPage === "login" ||
      currentPage === "contact"
    ) {
      // If the current page is 'form', don't render the additional section
      return null;
    }
    // Render the additional div for other pages
    return (
      // Header section
      <section className="container px-4 sm:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
        <div className="mb-16 lg:mt-32 xl:mt-40 xl:mr-12">
          <h1 className="h1-large mb-5">Team management mobile application</h1>
          <p className="p-large mb-8">
            Start getting things done together with your team based on Pavo's
            revolutionary team management features
          </p>
          <a className="btn-solid-lg" href="#your-link">
            <i className="fab fa-apple" />
            Download
          </a>
          <a className="btn-solid-lg secondary" href="#your-link">
            <i className="fab fa-google-play" />
            Download
          </a>
        </div>
        <div className="xl:text-right">
          <img className="inline" src={HeaderSmartphone} alt="alternative" />
        </div>
      </section>
    );
  };
  return (
    <>
      {/* Navigation */}
      <nav className="navbar  fixed-top">
        <div className="container sm:px-4 lg:px-8 flex flex-wrap items-center justify-between lg:flex-nowrap">
          {/* Text Logo - Use this if you don't have a graphic logo */}
          {/* <a class="text-gray-800 font-semibold text-3xl leading-4 no-underline page-scroll" href="index.html">Pavo</a> */}
          {/* Image Logo */}
          <a
            onClick={() => navigateTo("home")}
            className="inline-block mr-4 py-0.5 text-xl whitespace-nowrap hover:no-underline focus:no-underline cursor-pointer"
          >
            <img src={Logo} alt="alternative" className="h-8" />
          </a>
          <button
            className="background-transparent rounded text-xl leading-none hover:no-underline focus:no-underline lg:hidden lg:text-gray-400"
            type="button"
            data-toggle="offcanvas"
          >
            <span className="navbar-toggler-icon inline-block w-8 h-8 align-middle" />
          </button>
          <div
            className="navbar-collapse offcanvas-collapse lg:flex lg:flex-grow lg:items-center"
            id="navbarsExampleDefault"
          >
            <ul className="pl-0 mt-3 mb-2 ml-auto flex flex-col list-none lg:mt-0 lg:mb-0 lg:flex-row">
              <li>
                <a className="nav-link page-scroll active" href="#header">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="dropdown">
                <a
                  className="nav-link p-0 flex"
                  href="#"
                  id="dropdown01"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <Tooltip
                    show={isHovered}
                    buttonChildren={
                      <p className="flex text-sm items-center font-semibold hover:text-[#ff6f85]">
                        Drop <Arrow />
                      </p>
                    }
                    panelStyle={`bg-white absolute px-2 py-2 rounded mt-2 w-44 shadow-lg`}
                    children={
                      <ul className="">
                        <li
                          onClick={() => navigateTo("articles")}
                          className="text-[#808f99] hover:text-[#ff6f85] border-b px-2 py-4"
                        >
                          Article Details
                        </li>
                        <li
                          onClick={() => navigateTo("terms")}
                          className="text-[#808f99] hover:text-[#ff6f85] border-b px-2 py-4"
                        >
                          Terms Conditions
                        </li>
                        <li
                          onClick={() => navigateTo("privacy")}
                          className="text-[#808f99] hover:text-[#ff6f85] py-4 px-2"
                        >
                          Privacy Policy
                        </li>
                      </ul>
                    }
                  />
                </a>

                <div className="dropdown-menu" aria-labelledby="dropdown01">
                  <a className="dropdown-item page-scroll" href="article.html">
                    Article Details
                  </a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item page-scroll" href="terms.html">
                    Terms Conditions
                  </a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item page-scroll" href="privacy.html">
                    Privacy Policy
                  </a>
                </div>
              </li>
              <li>
                <a onClick={() => navigateTo('recepie')} className="nav-link cursor-pointer page-scroll" >
                  Recepies
                </a>
              </li>
            </ul>
            <span className="block lg:ml-3.5">
              <a className="no-underline" href="#your-link">
                <i className="fab fa-apple text-indigo-600 hover:text-pink-500 text-xl transition-all duration-200 mr-1.5" />
              </a>
              <a className="no-underline" href="#your-link">
                <i className="fab fa-android text-indigo-600 hover:text-pink-500 text-xl transition-all duration-200" />
              </a>
            </span>
            <button
              onClick={() => navigateTo("login")}
              className="px-5 py-2 bg-blue-500 rounded-lg text-white font-semibold ml-4 hover:bg-blue-700"
            >
              Log In
            </button>
            <button
              onClick={() => navigateTo("signup")}
              className="px-5 py-2 border rounded-lg  font-semibold ml-4 hover:bg-neutral-200 bg-white"
            >
              Sign up
            </button>
          </div>
          {/* end of navbar-collapse */}
        </div>
        {/* end of container */}
      </nav>
      {/* end of navbar */}
      {/* end of navigation */}
      {/* Header */}
      <header
        id="header"
        className={` header ${
          currentPage === "signup" ||
          currentPage === "login" ||
          currentPage === "contact"
            ? "pt-0 pb-0"
            : "xl:pt-44 xl:pb-32 md:pt-36 py-28"
        }  text-center  lg:text-left `}
      >
        {renderAdditionalSection()}

        {/* end of container */}
      </header>
      {/* end of header */}
    </>
  );
}
