import Card from "../../Tools/Card"
import { ZARA, tiffany, Razer } from "../Partials/Imports"

export default function Shops({navigateTo}) {
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
    return <section>
            <h1 className="text-center font-serif font-semibold text-3xl mb-4 px-4 sm:px-0 ">Browse your favorite shops</h1>
        <section className="grid  md:grid-cols-2 lg:grid-cols-3 w-full md:w-2/3 mx-auto gap-4 ">
            {shopData.map(shop => <Card onClick={() => navigateTo('products')} image={shop.image} title={shop.name} btnText='Visit shop' />)}
        </section>
    </section>
}