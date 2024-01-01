import ProductCard from "./ProductCard";
import { TrashIcon } from "../Partials/Imports";

export default function Products({ style }) {
  // Get the cart products from local storage
  const storedCartItems =
    JSON.parse(localStorage.getItem("cartProducts")) || [];
    const clearCart = () => {
        localStorage.removeItem("cartProducts");
    }
  return (
    <section className={`${style} h-fit bg-white rounded shadow py-4 divide-y md:mb-8`}>
      <article className="hidden md:flex w-full px-4 font-semibold text-lg py-2 ">
        <h1 className="w-6/12">Products</h1>
        <p className="w-2/12">Price</p>
        <p className="w-2/12">Quantity</p>
        <p className="w-2/12">Total Price</p>
        <TrashIcon style={`hover:outline outline-1 rounded p-1`} onClick={clearCart} />
      </article>
      {storedCartItems.length > 0 ? (
        storedCartItems.map((product, i) => (
          <ProductCard key={`${product.id}_${i}`} product={product} />
        ))
      ) : (
        <p className="text-slate-300 font-semibold text-center pt-4">No products in the cart</p>
      )}
    </section>
  );
}
