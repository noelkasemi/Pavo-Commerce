import { useState } from "react";
import { Switch } from "@headlessui/react";

export default function MyToggle() {
  const [enabled, setEnabled] = useState(false);

  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className={`${
        enabled ? "bg-white" : "bg-black"
      } relative inline-flex h-6 w-11 items-center rounded-full `}
    >
      <span className="sr-only">{`${
        enabled ? "Enable" : "Disable"
      } Darkmode`}</span>
      <span
        className={`${
          enabled ? "translate-x-6 bg-black" : "translate-x-1 bg-white"
        } inline-block h-4 w-4 transform rounded-full  transition`}
      />
    </Switch>
  );
}
