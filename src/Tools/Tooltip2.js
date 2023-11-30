import { Popover, Transition } from "@headlessui/react";
import { useState } from "react";

export default function Tooltip2({ position = "bottom", style }) {
  const [hovered, setHovered] = useState(false);

  const getPositionClass = () => {
    switch (position) {
      case "top":
        return "-translate-y-28 -translate-x-8";
      case "bottom":
        return "top-full -translate-x-8";
      case "left":
        return "right-full -translate-y-14 -translate-x-2";
      case "right":
        return "left-full -translate-y-14 translate-x-2";
      default:
        return "bottom-full";
    }
  };

  return (
    <Popover className="mr-48">
      <Popover.Button
        className="py-2 px-8 focus:outline-none rounded text-white font-semibold font-serif bg-gradient-to-r from-red-600 to-orange-600"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        Drop
      </Popover.Button>

      <Transition
        show={hovered}
        as="div"
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel
          static
          className={`${style} absolute font-semibold p-4 bg-slate-300 w-44 mt-2 rounded ${getPositionClass()}`}
        >
          Lorem ipsum dolor
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
