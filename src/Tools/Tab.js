// Tabs.js

import { Tab } from "@headlessui/react";

const Tabs = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <Tab.Group>
      <Tab.List className="flex border-b-2 border-slate-200 w-full">
        {Object.keys(tabs).map((tab) => (
          <Tab
            key={tab}
            className={({ selected }) =>
              `w-full outline-none py-2.5 text-sm font-medium  ${
                selected
                  ? "border-b-2  border-orange-400 text-black "
                  : " text-black hover:bg-slate-200"
              }`
            }
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </Tab>
        ))}
      </Tab.List>
      <Tab.Panels className="mt-2">
        {Object.entries(tabs).map(([tab, content], idx) => (
          <Tab.Panel
            key={idx}
            className={`${
              idx === 2 ? "space-x-4" : ""
            } bg-white p-3 outline-none`}
          >
            {content}
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
};

export default Tabs;
