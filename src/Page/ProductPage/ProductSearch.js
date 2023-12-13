import { useState } from "react";
import { Transition } from "@headlessui/react";

export default function ProductSearch({ data }) {
  const [search, setSearch] = useState("");
  const [isShowing, setIsShowing] = useState(false);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const toggleShow = () => {
    setIsShowing(!isShowing);
  };

  const filteredItems = data.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="w-full md:w-2/3 md:left-[20%] left-0 absolute top-0 mt-4 z-20 px-4 md:px-0">
      <article className="flex">
        <svg
          className="absolute mt-[14px] left-6 md:left-[5px] md:ml-1 text-gray-500 h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx={11} cy={11} r={8} />
          <line x1={21} y1={21} x2="16.65" y2="16.65" />
        </svg>
        <input
          value={search}
          onChange={handleSearch}
          onClick={toggleShow}
          type="text"
          placeholder="Search your favorite products"
          className={`border ${
            isShowing ? "none" : "rounded-b-lg"
          } bg-transparent  placeholder-gray-500 font-bold text-2xl border-gray-300 rounded-t-lg w-full py-2 pl-10  focus:border-blue-500 focus:outline-none`}
        />
      </article>
      <Transition
        show={isShowing}
        enter="transition-opacity duration-75"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <article className="bg-white border divide-y h-[390px] overflow-auto cursor-pointer ">
          {filteredItems.map((item) => (
            <li className="flex space-x-4 bg-white hover:brightness-90 p-4 " key={item.id}>
              <img className="w-20 h-20" src={item.image} />{" "}
              <article >
                <p className="font-semibold text-xl truncate">{item.title}</p>
                <p className="text-lg">{item.category}</p>
                <p className="border border-green-600 w-fit bg-green-100 px-4 text-green-600 font-semibold rounded">In stock</p>
                <p className="font-semibold text-lg">
                  {((item.price / 100) * 50).toFixed(2)}$
                </p>
              </article>{" "}
            </li>
          ))}
        </article>
      </Transition>
    </section>
  );
}
