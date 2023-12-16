import useResizeEffect from "../../Tools/ResizeEffect";
import { useEffect, useState } from "react";

export default function Nav() {
  const [isMobile, setIsMobile] = useResizeEffect();
  

  return (
    <nav className="navbar z-30 bg-white shadow w-full fixed">
      <section className=" w-full py-4 sm:px-4 lg:px-8 flex flex-wrap items-center  ">
        <a
          onClick={() => navigateTo("home")}
          className="inline-block mr-4 py-0.5 text-xl whitespace-nowrap hover:no-underline focus:no-underline cursor-pointer"
        >
          <img src={Logo} alt="alternative" className="h-8" />
        </a>

        {isMobile ? (
          <>
            <Lines
              onClick={() => setShow(!show)}
              style={`ml-auto w-10 h-10 cursor-pointer`}
            />
            {show && (
              <Sidebar
                navigateTo={navigateTo}
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
                          {drop.map((item, index) => (
                            <li
                              key={index}
                              onClick={() => navigateTo(item.navigate)}
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
  );
}
