import { useState, useEffect } from "react";
import { TrashIcon } from "../Partials/Imports";

const ProductCard = ({ product }) => {
  // Initialize quantity from local storage or default to 1
  const initialQuantity = parseInt(localStorage.getItem(`product_${product.id}_quantity`), 10) || 1;

  // State to manage the total price
  const [quantity, setQuantity] = useState(initialQuantity);
  const priceAfterDiscount = ((product.price / 100) * 50).toFixed(1);
  const totalPrice = (priceAfterDiscount * quantity).toFixed(1);

  // Update local storage when quantity changes
  const updateQuantityInStorage = (newQuantity) => {
    localStorage.setItem(`product_${product.id}_quantity`, newQuantity.toString());
  };

  // Function to handle changes in the product quantity
  const handleQuantityChange = (newQuantity) => {
    // Ensure new quantity is within the valid range (1 to 10)
    const validQuantity = Math.max(1, Math.min(10, newQuantity));

    // Update local storage and state
    updateQuantityInStorage(validQuantity);
    setQuantity(validQuantity);
  };

  // Function to handle removing the product from the cart
  const handleRemoveProduct = () => {
    // Get the current cart items from local storage
    const currentCartItems =
      JSON.parse(localStorage.getItem("cartProducts")) || [];

    // Filter out the current product from the cart
    const updatedCartItems = currentCartItems.filter(
      (item) => item.id !== product.id
    );

    // Save the updated cart items to local storage
    localStorage.setItem("cartProducts", JSON.stringify(updatedCartItems));
    localStorage.removeItem(`product_${product.id}_quantity`);
  };

  useEffect(() => {
    // Set the quantity to the initial value when the component mounts
    setQuantity(initialQuantity);
  }, [initialQuantity]);

  return (
    <section className="flex flex-col md:flex-row items-center shadow py-4 space-y-4 md:h-44 h-48 justify-between px-4">
      <section className="flex justify-between items-center w-full md:w-1/2">
        <img className="w-16 h-fit object-contain" src={product.image} alt={product.title} />
        <h1 className="w-40 min-h-fit max-h-24 truncate flex items-center whitespace-normal hover:text-[#e65228] font-semibold cursor-pointer">
          {product.title}
        </h1>
        <h2 className="font-bold text-lg">{priceAfterDiscount}$</h2>
      </section>

      {/* Quantity controls */}
      <article className="hidden md:flex">
        <button
          className="border rounded px-2"
          disabled={quantity === 1}
          onClick={() => handleQuantityChange(quantity - 1)}
        >
          -
        </button>
        <input
          className="w-12 text-center border h-fit rounded"
          type="number"
          value={quantity}
          onChange={(e) => handleQuantityChange(parseInt(e.target.value, 10))}
          onBlur={() => handleQuantityChange(quantity)}
          inputMode="numeric"
          pattern="\d*"
        />
        <button
          className="border rounded px-2"
          disabled={quantity === 10}
          onClick={() => handleQuantityChange(quantity + 1)}
        >
          +
        </button>
      </article>

      <h3 className="hidden md:flex font-semibold text-xl">{totalPrice}$</h3>

      {/* Remove product button */}
      <TrashIcon onClick={handleRemoveProduct} style={"hidden md:flex hover:outline outline-1 rounded p-1"} />

      {/* Mobile view */}
      <section className="flex justify-between items-center w-full md:hidden">
        <article>
          <button
            className="border rounded px-2"
            disabled={quantity === 1}
            onClick={() => handleQuantityChange(quantity - 1)}
          >
            -
          </button>
          <input
            className="w-12 text-center border h-fit rounded"
            type="number"
            value={quantity}
            onChange={(e) => handleQuantityChange(parseInt(e.target.value, 10))}
            onBlur={() => handleQuantityChange(quantity)}
            inputMode="numeric"
            pattern="\d*"
          />
          <button
            className="border rounded px-2"
            disabled={quantity === 10}
            onClick={() => handleQuantityChange(quantity + 1)}
          >
            +
          </button>
        </article>
        <h3 className="flex space-x-2">
          {" "}
          <strong>Total Price: </strong>
          <p className="font-semibold"> {totalPrice} $ </p>{" "}
        </h3>
        <TrashIcon onClick={handleRemoveProduct} style={`hover:outline outline-1 rounded p-1`} />
      </section>
    </section>
  );
};

export default ProductCard;
