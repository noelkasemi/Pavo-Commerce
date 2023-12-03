import {Listbox, Transition, Fragment} from '../Page/Partials/Imports'

export default function MyListbox({
  selectedValue,
  setSelectedValue,
  listData,
  listName,
  children,
}) {
  const handleValueSelection = (selectedValue) => {
    setSelectedValue(selectedValue);
  };

  return (
    <Listbox value={selectedValue} onChange={handleValueSelection}>
      <Listbox.Button className="bg-white px-2 rounded-md py-2 ml-4 flex items-center font-medium tracking-wide text-sm">
        <p className="text-slate-500 font-serif text-md mr-2">{listName} : </p>{" "}
        {selectedValue}
        {children}
      </Listbox.Button>
      <Transition
        as={Fragment}
        leave="transition ease-in duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Listbox.Options className="overflow-hidden absolute mt-[40px] translate-x-4 bg-white h-24 w-[240px] rounded outline-none">
          {listData.map((item, index) => (
            <Listbox.Option
              className="cursor-pointer hover:bg-slate-100 px-2 py-1"
              key={index}
              value={item}
              // disabled={item.unavailable}
            >
              {item}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Transition>
    </Listbox>
  );
}
