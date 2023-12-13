import {
  Arrow,
  useState,
  useEffect,
  Tooltip,
  Logo,
  MyListbox,
  Lines,
  Button,
} from "../Partials/Imports";
import useResizeEffect from "../../Tools/ResizeEffect";
import Sidebar from "./Sidebar";

export default function Header({
  navigateTo,
  currentPage,
  changeLangTo,
  style,
}) {
  const languages = ["English", "Albanian"];
  // State for tracking hover state of the tooltip
  const [isHovered, setIsHovered] = useState(false);
  const [selected, setSelected] = useState(languages[0]);
  // useEffect to handle side effects related to navigation changes
  const isMobile = useResizeEffect();
  // This effect will run when currentPage changes

  //State to track if item is shown and when it will be shown
  const [show, setShow] = useState(false)

  // scrolls to the top of the page when the navigation changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const buttons = [{ label: "login" }, { label: "signup" }];
  const navItems = [
    { label: "home" },
    { label: "Drop" },
    { label: "shops" },
    { label: "products" },
  ];
  const drop = [
    { label: "Article Details", navigate: "articles" },
    { label: "Terms Condition", navigate: "terms" },
    { label: "Privacy Policy", navigate: "privacy" },
  ];
  return (
    <>
      {/* Navigation */}
      <nav className="navbar z-30 bg-white shadow w-full fixed">
        <section className=" w-full py-4 sm:px-4 lg:px-8 flex flex-wrap items-center  ">
          <a
            onClick={() => navigateTo("home")}
            className="inline-block mr-4 py-0.5 text-xl whitespace-nowrap hover:no-underline focus:no-underline cursor-pointer"
          >
            <img src={Logo} alt="alternative" className="h-8" />
          </a>

          {isMobile ? (<>
            <Lines onClick={() => setShow(!show)} style={`ml-auto w-10 h-10 cursor-pointer`} />
            {show && <Sidebar navigateTo={navigateTo} onClick={() => setShow(!show)} show={show} navItems={navItems} buttons={buttons} drop={drop} />}
            </>
          ) : (
            <section
              className=" space-x-6 flex flex-grow items-center justify-end "
              id="navbarsExampleDefault"
            >
              <ul className=" pl-0 mt-3 space-x-4 font-semibold mb-2  flex flex-col  lg:mt-0 lg:mb-0 lg:flex-row">
                {navItems.map((item) => (
                  <li
                    key={item.label}
                    onMouseEnter={() =>
                      item.label === "Drop" && setIsHovered(true)
                    }
                    onMouseLeave={() =>
                      item.label === "Drop" && setIsHovered(false)
                    }
                    className={`cursor-pointer hover:text-[#ff6f85] ${
                      item.label === "Drop" && "flex"
                    }`}
                    style={{ textTransform: "capitalize" }}
                    onClick={() =>
                      item.label === "Drop" ? null : navigateTo(item.label)
                    }
                  >
                    {item.label === "Drop" ? (
                      <Tooltip
                        show={isHovered}
                        buttonChildren={
                          <p className="flex text-sm items-center hover:text-[#ff6f85]">
                            Drop <Arrow />
                          </p>
                        }
                        panelStyle={`bg-white absolute px-2 py-2 rounded mt-2 w-44 shadow-lg`}
                        children={
                          <ul>
                            {drop.map((item) => (
                              <li
                                onClick={() => navigateTo(item.navigate)}
                                className={`${
                                  item.label === "Privacy Policy" ? "" : "border-b"
                                } cursor-pointer text-[#808f99] hover:text-[#ff6f85]  px-2 py-4`}
                              >
                                {item.label}
                              </li>
                            ))}
                          </ul>
                        }
                      />
                    ) : (
                      item.label
                    )}
                  </li>
                ))}
              </ul>
              {buttons.map((btn) => (
                <Button
                  key={btn.label}
                  text={btn.label}
                  style={`${
                    btn.label === "signup"
                      ? " hover:bg-neutral-200 bg-white border text-black"
                      : "hover:bg-blue-700 text-white px-5"
                  } font-semibold py-1 `}
                  onClick={() => navigateTo(btn.label)}
                />
              ))}

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
          currentPage === 'forgotPassword'
            ? "pt-0 pb-0"
            : "xl:pt-28 xl:pb-2 md:pt-36 pt-24"
        }  ${style} `}
      >
        {/* end of container */}
      </header>
      {/* end of header */}
    </>
  );
}
