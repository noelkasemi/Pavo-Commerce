import Card from "../../Tools/Card";
import Chevron from "../../assets/Svg/Chevron";
import { ZARA, tiffany, Razer, useState } from "../Partials/Imports";

export default function Shops({ navigateTo }) {
  const [hoveredShop, setHoveredShop] = useState(null)
  const shopData = [
    {
      name: 'Zara',
      image: ZARA
    },
    {
      name: 'Tiffany & Co',
      image: tiffany
    },
    {
      name: 'Razer',
      image: Razer
    }
  ];

  const handleHover = (shopName) => {
    setHoveredShop(shopName);
  };


  return (
    <section>
      <h1 className="text-center font-serif font-semibold text-3xl mb-4 px-4 sm:px-0">Browse your favorite shops</h1>
      <section className="grid md:grid-cols-2 lg:grid-cols-3 w-full md:w-2/3 mx-auto gap-4">
        {shopData.map(shop => (
          <Card
            key={shop.name}
            onClick={() => navigateTo('products')}
            btnClick={() => navigateTo('products')}
            image={shop.image}
            title={shop.name}
            btnText={`Visit shop`}
            btnIcon={<Chevron type='right' />}
            btnIconStyle={`w-3 h-3 ${hoveredShop === shop.name && ' transition ease-in-out durantion-500 translate-x-2'}`}
            btnEnter={() => handleHover(shop.name)}
            btnLeave={() => handleHover(null)}
            btnStyle={`text-white`}
          />
        ))}
      </section>
    </section>
  );
}
