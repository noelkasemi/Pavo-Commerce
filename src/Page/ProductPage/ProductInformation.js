import { CreditCard, Star, CartPlus,Heart,Money,DoubleCards,BlackCard, useState, useNavigate } from "../Partials/Imports";
import { v4 as uuidv4 } from 'uuid';


const ProductInformation = ({ product, count, setCount, save, tax,}) => {
  const navigate = useNavigate()
  const navigateToLogin = () => {
    navigate('/login')
    window.scrollTo(0, 0)
  }

   // State to track cart status
   const [isAddedToCart, setIsAddedToCart] = useState(false);

   // Function to handle adding to cart
   const addToCartHandler = (product) => {
     // Create a new object with a unique UUID for the product ID
     const productToAdd = {
       ...product,
       id: uuidv4(),
     };
     // Add the product to local storage
     const cartProducts = JSON.parse(localStorage.getItem("cartProducts")) || [];
     const updatedCart = [...cartProducts, productToAdd];
     localStorage.setItem("cartProducts", JSON.stringify(updatedCart));
     // For now, let's just update the state to simulate the product being added
     setIsAddedToCart(true);
   };

  return (
    <article className="space-y-4 lg:ml-5 lg:w-2/4">
      <h2 className="font-bold text-2xl font-serif">{product.title}</h2>
      <article className="flex space-x-4">
        <li>Warranty: 1 year</li> <li>Code: {product.id}</li>{" "}
      </article>

      <article className="flex flex-col ">
        <p className="line-through text-medium text-slate-500">
          ${product.price}
        </p>
        <article className="flex items-center font-semibold text-3xl">
          ${((product.price / 100) * 50).toFixed(0)}
          <p className="text-sm ml-4 text-slate-600">
            Including tax
            <p>Without tax {(save - tax).toFixed()}$</p>
          </p>
        </article>
        <article className="text-[#e65228] flex">
          You save {save.toFixed()}${" "}
          <p className=" rounded-lg ml-1 font-semibold px-1 bg-[#fcede9]">
            {" "}
            -50%
          </p>{" "}
        </article>
      </article>
      <article className="flex items-center space-x-2 border-2 w-full rounded py-2 px-2">
        <CreditCard style={`w-14 h-fit`} />
        <CreditCard style={`w-14 h-fit`} />
        <p className="font-semibold text-sm">
          up to 12 installments without interest for only{" "}
          <strong className="text-[#e65228] font-medium ">
            {(save / 12).toFixed()}$/month
          </strong>{" "}
        </p>
      </article>
      <p className="font-semibold text-sm border-t-2 pt-2 w-full"> Quantity </p>
      <article className="flex items-center">
        <button
          className="border rounded-l px-4 text-2xl py-2"
          disabled={count === 1}
          onClick={() => setCount(count - 1)}
        >
          -
        </button>
        <p className="border-2 px-6  py-2 font-semibold text-lg">{count}</p>
        <button
          className="border px-4 rounded-r py-2 text-2xl"
          onClick={() => setCount(count + 1)}
        >
          +
        </button>
      </article>
      <p className="font-semibold text-sm border-t-2 pt-2 w-full">
        Secure Payments
      </p>
      <article className="flex flex-col  sm:flex-row justify-between space-y-2 lg:space-y-0 px-4">
        <p className="flex items-center font-semibold text-sm">
          <Money style={`bg-[#fcede9] p-2 w-9 h-9 mr-2 text-[#e65228]`} /> Pay
          Cash
        </p>
        <p className="flex items-center font-semibold text-sm">
          <BlackCard style={`bg-[#fcede9] p-2 w-9 h-9 mr-2 text-[#e65228]`} />{" "}
          Pay online
        </p>
        <p className="flex items-center font-semibold text-sm">
          <DoubleCards style="bg-[#fcede9] p-2 w-9 h-9 mr-2 text-[#e65228]" />{" "}
          Pay with bank transfer
        </p>
      </article>
      <article className="flex space-x-4 sm:px-8 h-12">
        <button onClick={() => navigate('/checkout')} className="w-full bg-[#e65228] hover:brightness-90 text-white  font-semibold rounded">
          Buy now
        </button>
        <button  onClick={() => addToCartHandler(product)} className="w-full flex items-center justify-center bg-white font-semibold hover:brightness-90 border-black border rounded">
          <CartPlus style={`w-8 h-8 mr-2`} /> Add to cart
        </button>
        <button className="bg-white rounded hover:outline outline-1 p-4">
          {" "}
          <Heart navigateTo={navigateToLogin} />
        </button>
      </article>
    </article>
  );
};

export default ProductInformation