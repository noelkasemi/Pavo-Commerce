import {
  Arrow,
  useState,
  Tooltip,
  Logo,
  MyListbox,
  Lines,
  Button,
  data,
  Sidebar,
  Cart,
  useEffect,
} from "../Partials/Imports";
import useResizeEffect from "../../Tools/ResizeEffect";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Chevron from "../../assets/Svg/Chevron";

export default function Nav() {
  const buttons = [{ label: "login" }, { label: "signup" }];
  const navItems = data.navItems;
  const drop = data.drop;
  const navigate = useNavigate();
  const languages = ["English", "Albanian"];
  // State for tracking hover state of the tooltip
  const [isHovered, setIsHovered] = useState(false);
  const [selected, setSelected] = useState(languages[0]);
  // useEffect to handle side effects related to navigation changes
  const isMobile = useResizeEffect();
  // This effect will run when currentPage changes

  //State to track if item is shown and when it will be shown
  const [show, setShow] = useState(false);
  const changeLangTo = () => {
    //function to change the language
  };

    // Get the cart products from local storage
    const storedCartItems = JSON.parse(localStorage.getItem('cartProducts')) || [];
  return (
    <nav>
      <section className=" w-full py-4 sm:px-4 lg:px-8 flex flex-wrap items-center  ">
        <Link
          to="/home"
          className="inline-block mr-4 py-0.5 text-xl whitespace-nowrap hover:no-underline focus:no-underline cursor-pointer"
        >
          <img src={Logo} alt="alternative" className="h-8" />
        </Link>

        {isMobile ? (
          <>
          <Cart  style={`cursor-pointer `} containerStyle={`hover:bg-[#e8e8e8] ml-auto mr-4 p-1 rounded `} onClick={() => navigate("/cart")} >
            {storedCartItems.length > 0 && (
              <section className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs px-1.5 py-[1px]">
                {storedCartItems.length}
              </section>
            )}
            </Cart>
            <Lines
              onClick={() => setShow(!show)}
              style={`w-10 h-10 cursor-pointer`}
            />
            {show && (
              <Sidebar
                onClick={() => setShow(!show)}
                show={show}
                navItems={navItems}
                buttons={buttons}
                drop={drop}
              />
            )}
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
                    item.label === "Drop"
                      ? null
                      
                      : navigate(`/${item.label}`)
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
                          {drop.map((item, index) => (
                            <li
                              key={index}
                              onClick={() => navigate(`/${item.navigate}`)}
                              className={`${
                                item.label === "Privacy Policy"
                                  ? ""
                                  : "border-b"
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
            {buttons.map((btn, i) => (
              <Button
                key={i}
                text={btn.label}
                style={`${
                  btn.label === "signup"
                    ? " hover:bg-neutral-200 bg-white border text-black"
                    : "hover:bg-blue-700 text-white px-5"
                } font-semibold py-1 `}
                onClick={() => navigate(`/${btn.label}`)}
              />
            ))}
            <Cart  style={`cursor-pointer`} containerStyle={`hover:bg-[#e8e8e8] p-1 rounded`} onClick={() => navigate("/cart")} >
            {storedCartItems.length > 0 && (
              <div className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs px-1.5 py-[1px]">
                {storedCartItems.length}
              </div>
            )}
            </Cart>

            <MyListbox
              selectedValue={selected}
              setSelectedValue={setSelected}
              children={<Chevron style={`w-3 h-3 ml-[1px]`} type="down" />}
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
  );
}
