import {
  Arrow,
  useState,
  useEffect,
  Tooltip,
  Logo,
  MyListbox,
  Lines,
} from "../Partials/Imports";

export default function Header({ navigateTo, currentPage, changeLangTo }) {
  const languages = ["English", "Albanian"];

  // State for tracking hover state of the tooltip
  const [isHovered, setIsHovered] = useState(false);
  const [selected, setSelected] = useState(languages[0]);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 945);

  // useEffect to handle side effects related to navigation changes
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1020);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup function
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [currentPage]); // This effect will run when currentPage changes

  // scrolls to the top of the page when the navigation changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <>
      {/* Navigation */}
      <nav className="navbar z-30 bg-white shadow w-full fixed">
        <section className=" w-full py-4 sm:px-4 lg:px-8 flex flex-wrap items-center  ">
          <a
            onClick={() => navigateTo("home")}
            className="inline-block mr-4 py-0.5 text-xl whitespace-nowrap hover:no-underline focus:no-underline cursor-pointer">
            <img src={Logo} alt="alternative" className="h-8" />
          </a>

          {isMobile ? (
            <Lines style={`ml-auto w-10 h-10 cursor-pointer`} />
          ) : (
            <section
              className=" space-x-6 flex flex-grow items-center justify-end "
              id="navbarsExampleDefault"
            >
              <ul className=" pl-0 mt-3 space-x-4 font-semibold mb-2  flex flex-col  lg:mt-0 lg:mb-0 lg:flex-row">
                <li>
                  <a
                    onClick={() => navigateTo("home")}
                    className="cursor-pointer hover:text-[#ff6f85]"
                  >
                    Home
                  </a>
                </li>
                <li className="dropdown ">
                  <a
                    className="nav-link  flex"
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
                        <p className="flex text-sm items-center hover:text-[#ff6f85]">
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
                    className="nav-link cursor-pointer page-scroll hover:text-[#ff6f85]"
                  >
                    Recepies
                  </a>
                </li>
                <li>
                <a
                    onClick={() => navigateTo("products")}
                    className="nav-link cursor-pointer page-scroll hover:text-[#ff6f85]"
                  >
                    Products
                  </a>
                </li>
              </ul>

              <button
                onClick={() => navigateTo("login")}
                className="px-4 py-1 bg-blue-500 rounded-lg text-white font-semibold ml-4 hover:bg-blue-700"
              >
                Log In
              </button>
              <button
                onClick={() => navigateTo("signup")}
                className="px-4 py-1 border rounded-lg  font-semibold ml-4 hover:bg-neutral-200 bg-white"
              >
                Sign up
              </button>
              <MyListbox
                selectedValue={selected}
                setSelectedValue={setSelected}
                children={<Arrow style={`w-3 h-3 ml-[1px]`} type="down" />}
                onClick={() => changeLangTo(selected)}
                listData={languages}
                style={`right-7 top-12`}
              />
            </section>
          )}
          {/* end of navbar-collapse */}
        </section>
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
          currentPage === "contact" ||
          currentPage === 'products'
            ? "pt-0 pb-0"
            : "xl:pt-44 xl:pb-2 md:pt-36 py-2"
        }  text-center  lg:text-left ` }
      >
        {/* end of container */}
      </header>
      {/* end of header */}
    </>
  );
}
