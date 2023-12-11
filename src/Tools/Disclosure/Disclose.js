import { Disclosure, ChevronUpIcon } from "../../Page/Partials/Imports";

export default function Disclose({text, btn, btnStyle, panelStyle}){
    return (
      <Disclosure as="div" className="mt-2">
        {({ open }) => (
          <>
            <Disclosure.Button
              className={`${btnStyle} flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75`}
            >
              <span>{btn}</span>
              <ChevronUpIcon
                className={`${
                  open ? "rotate-180 transform transition duration-300" : "transition duration-300"
                } h-5 w-5 text-purple-500`}
              />
            </Disclosure.Button>
            <Disclosure.Panel
              className={`${panelStyle} px-4 pb-2 pt-4 text-sm text-gray-500`}
            >
              {text}
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    )
  }