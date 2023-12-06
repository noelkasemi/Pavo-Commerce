import { Listbox, Transition, Fragment, useEffect } from '../Page/Partials/Imports';

export default function MyListbox({
  selectedValue,
  setSelectedValue,
  listData = [],
  listName = '',
  children,
  style,
  onClick
}) {
  
  return (
    <Listbox value={selectedValue} onChange={setSelectedValue}>
      {/* Listbox button */}
      <Listbox.Button className="bg-white px-2 rounded-md py-2 ml-4 flex items-center font-medium tracking-wide text-sm">
        <p className="text-slate-500 font-serif text-md mr-2"> {`${listName === '' ? '' : listName + ': ' }`} </p>{" "}
        {selectedValue}
        {children}
      </Listbox.Button>

      {/* Listbox options with transition */}
      <Transition
        as={Fragment}
        leave="transition ease-in duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Listbox.Options className={`${style}  absolute max-h-60 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm`}>
          {listData.map((item, index) => (
            <Listbox.Option
              key={index}
              onClick={() => {
                // Set selected value on click
                setSelectedValue(item);
              }}
              className={({ active }) =>
                `relative cursor-default select-none py-2 px-4  ${
                  active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                }`
              }
              value={item}
            >
              {/* Render content inside the Listbox.Option */}
              {({ selected }) => {
                useEffect(() => {
                  // Use useEffect to handle side effects after the state update
                  onClick();
                }, [selectedValue, onClick]);
              
                return (
                  <span
                    className={`block truncate  ${
                      selected ? 'font-medium' : 'font-normal'
                    }`}
                  >
                    {item}
                  </span>
                );
              }}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Transition>
    </Listbox>
  );
}
