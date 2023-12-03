import { Disclosure, ChevronUpIcon } from "../Page/Partials/Imports";

export default function MyDisclosure({
  panelStyle,
  children,
  children2,
  buttonChildren,
  buttonChildren2,
  buttonStyle,
}) {
  // panelStyle - prop for styling the Disclosure Panel
  // children -  prop for adding children/text to the Disclosure Panel
  // buttonChildren - prop for adding text to the button
  // buttonStyle - prop for styling the Disclosure Button
  return (
    <div className="w-full">
      <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-2">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button
                className={`${buttonStyle} flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75`}
              >
                <span>{buttonChildren}</span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel
                className={`${panelStyle} px-4 pb-2 pt-4 text-sm text-gray-500`}
              >
                {children}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button
                className={`${buttonStyle} flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75`}
              >
                <span>{buttonChildren2}</span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel
                className={`${panelStyle} px-4 pb-2 pt-4 text-sm text-gray-500`}
              >
                {children2}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
}
