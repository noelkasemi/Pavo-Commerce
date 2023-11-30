import { useState } from "react";
import { Switch } from "@headlessui/react";
import Moon from "../assets/Svg/moon";
import Sun from "../assets/Svg/Sun";

export default function MyToggle({ onClick }) {
  const [enabled, setEnabled] = useState(false);

  return (
    <Switch
      onClick={onClick}
      checked={enabled}
      onChange={setEnabled}
      className={`${
        enabled ? "bg-white" : "bg-black"
      } relative inline-flex h-10 w-24 items-center rounded-full ml-4`}
    >
      {/* <span className="sr-only"></span> */}

      <span
        className={`${
          enabled ? "translate-x-14 bg-black" : "translate-x-1 bg-white"
        } inline-block h-9 w-9 transform rounded-full items-center flex justify-center transition`}
      >
        {enabled ? <Moon /> : <Sun />}{" "}
      </span>
    </Switch>
  );
}
