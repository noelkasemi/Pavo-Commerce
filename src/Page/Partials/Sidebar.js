import { Transition } from "@headlessui/react";
import Xicon from "../../assets/Svg/Xicon";
import { Button } from "./Imports";

export default function Sidebar({ navItems, drop, show, onClick, navigateTo }) {
  const data = [...navItems, ...drop];

  return (
    <Transition
      show={show}
      enter="transition-opacity duration-75"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-150"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <section className="absolute sm:w-1/3 w-2/3 right-0 space-y-4 bg-[#e2e8f0] h-screen top-0">
        <p className="flex justify-between shadow p-2  bg-[#f1f5f9]">
          <Xicon style={`w-11 h-11 cursor-pointer`} onClick={onClick} />
          <span
            onClick={() => navigateTo("login")}
            className="text-xl border-2 rounded-lg font-semibold cursor-pointer hover:brightness-90 px-4 py-2 bg-[#f1f5f9]"
          >
            Login
          </span>
        </p>

        {data.map(
          (item, index) =>
            // Exclude items with label "Drop"
            item.label !== "Drop" && (
              <p
                onClick={() =>
                  item.label === "home" ||
                  item.label === "shops" ||
                  item.label === "products"
                    ? navigateTo(item.label)
                    : navigateTo(item.navigate)
                }
                style={{ textTransform: "capitalize" }}
                className="text-xl font-semibold cursor-pointer hover:brightness-90 px-4 py-2 bg-[#e2e8f0]"
                key={index}
              >
                {typeof item === "object" ? item.label : item}
              </p>
            )
        )}
        <Button
          onClick={() => navigateTo("signup")}
          text="Sign up"
          style={`text-white ml-4 translate-y-4`}
        />
      </section>
    </Transition>
  );
}
