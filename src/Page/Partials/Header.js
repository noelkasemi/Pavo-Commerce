import { Arrow, useState, useEffect, Tooltip, Logo, HeaderSmartphone, UsFlag, AlbFlag } from "../Partials/Imports";

export default function Header({ navigateTo, currentPage, changeLangTo }) {
  // State for tracking hover state of the tooltip
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);

  // useEffect to handle side effects related to navigation changes
  useEffect(() => {
    //  scrolls to the top of the page when the navigation changes
    window.scrollTo(0, 0);
  }, [currentPage]); // This effect will run when currentPage changes


  return (
    <>
      {/* Navigation */}
      <nav className="navbar  fixed-top">
        <div className="container sm:px-4 lg:px-8 flex flex-wrap items-center justify-between lg:flex-nowrap">
          <a className="inline-block mr-4 py-0.5 text-xl whitespace-nowrap hover:no-underline focus:no-underline cursor-pointer">
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
                <a
                  onClick={() => navigateTo("home")}
                  className=" nav-link page-scroll cursor-pointer active"
                >
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="dropdown ">
                <a
                  className="nav-link -translate-y-1 flex"
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
                          className="cursor-pointer text-[#808f99] hover:text-[#ff6f85] border-b px-2 py-4"
                        >
                          Article Details
                        </li>
                        <li
                          onClick={() => navigateTo("terms")}
                          className="cursor-pointer text-[#808f99] hover:text-[#ff6f85] border-b px-2 py-4"
                        >
                          Terms Conditions
                        </li>
                        <li
                          onClick={() => navigateTo("privacy")}
                          className="cursor-pointer text-[#808f99] hover:text-[#ff6f85] py-4 px-2"
                        >
                          Privacy Policy
                        </li>
                      </ul>
                    }
                  />
                </a>
              </li>
              <li>
                <a
                  onClick={() => navigateTo("recepie")}
                  className="nav-link cursor-pointer page-scroll"
                >
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
            <li className="dropdown ">
                <a
                  className="nav-link -translate-y-1 flex"
                  id="dropdown01"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  onMouseEnter={() => setIsHovered2(true)}
                  onMouseLeave={() => setIsHovered2(false)}
                >
                  <Tooltip
                    show={isHovered2}
                    buttonChildren={
                      <p className="flex text-sm flex items-center font-semibold hover:text-[#ff6f85]">
                        Lang 
                      </p>
                    }
                    panelStyle={`bg-white absolute px-2 py-2 rounded mt-2 w-24 -translate-x-4 shadow-lg`}
                    children={
                      <ul className="">
                        <li
                          onClick={() => changeLangTo('english')}
                          className="cursor-pointer text-[#808f99] hover:text-[#ff6f85] border-b px-2 py-4"
                        >
                          ENGLISH
                        </li>
                        <li
                          onClick={() => changeLangTo('albanian')}
                          className="cursor-pointer text-[#808f99] hover:text-[#ff6f85]  px-2 py-4"
                        >
                          ALBANIAN
                        </li>
                      </ul>
                    }
                  />
                </a>
              </li>
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

        {/* end of container */}
      </header>
      {/* end of header */}
    </>
  );
}
