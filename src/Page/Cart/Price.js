import { Button, useEffect, useState, useNavigate } from "../Partials/Imports";

export default function Price({ style }) {
  const currentCartItems =
    JSON.parse(localStorage.getItem("cartProducts")) || [];
  const navigate = useNavigate();

  // Calculate subtotal by summing up individual total prices for each product
const subtotal = currentCartItems.reduce((accumulator, product) => {
    // Retrieve quantity from local storage
    const productQuantity = parseInt(
      localStorage.getItem(`product_${product.id}_quantity`)
    );

    // Check if productQuantity is a valid number
    if (!isNaN(productQuantity)) {
      return accumulator + (product.price * productQuantity) / 100 * 50;
    }
    return accumulator;
  }, 0);

  const transportCost = currentCartItems.length === 0 ? 0 : 5;
  const tax = currentCartItems.length === 0 ? 0 : subtotal >= 100 ? 30 : 5;
  const totalPrice = subtotal + transportCost + tax;

  // State to store the estimated time of arrival
  const [arrivalDate, setArrivalDate] = useState('');

  useEffect(() => {
    // Calculate the estimated time of arrival
    const currentDate = new Date();
    const arrivalStartDate = new Date(currentDate);
    arrivalStartDate.setDate(currentDate.getDate() + 6); // 6 days from today
    const arrivalEndDate = new Date(arrivalStartDate);
    arrivalEndDate.setDate(arrivalStartDate.getDate() + 4); // 4 days after the start date

    // Format the dates
    const options = { month: 'long', day: 'numeric', year: 'numeric' };
    const formattedStartDate = arrivalStartDate.toLocaleDateString(
      'en-US',
      options
    );
    const formattedEndDate = arrivalEndDate.toLocaleDateString('en-US', options);

    // Set the arrival date string
    setArrivalDate(`${formattedStartDate} - ${formattedEndDate}`);
  }, [currentCartItems]); // Update when cart items change

  return (
    <section className={`${style} bg-white rounded shadow p-4 space-y-4`}>
      <h1 className="font-semibold">The total:</h1>
      <article className="border">
        <article className="flex justify-between px-4 py-2">
          <p>Subtotal: </p>
          <p>{subtotal.toFixed(2)}$</p>
        </article>
        <article className="flex justify-between px-4 py-2 bg-[#f3f3f3]">
          <p>Transport: </p>
          <p>{transportCost}$</p>
        </article>
        <article className="flex justify-between px-4 py-2">
          <p>Tax: </p>
          <p>{tax}$</p>
        </article>
        <article className="flex justify-between px-4 py-2 bg-[#f3f3f3]">
          <p className="font-bold">Total: </p>
          <p className="text-[#e65228] font-bold">{totalPrice.toFixed(2)}$</p>
        </article>
      </article>
      <article className="px-4 py-2 border">
        <h1 className="text-[#cbd0d6] font-semibold">Time of arrival:</h1>
        { currentCartItems.length === 0 ? '' : <p>{arrivalDate}</p>}
      </article>
      <Button
        onClick={() => navigate("/login")}
        style={`text-white font-semibold w-full flex justify-center rounded`}
      >
        LOGIN TO CONTINUE
      </Button>
    </section>
  );
}
