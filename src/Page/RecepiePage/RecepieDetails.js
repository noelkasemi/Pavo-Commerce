import { React, useState } from "../Partials/Imports";

const RecepieDetails = ({ recepie, navigateBack }) => {
  return (
    <main className=" mt-12 space-y-12 flex flex-col w-full items-center mx-4 justify-center py-6 ">
      <section className="flex rounded-lg w-fit p-4 shadow-[0px_20px_20px_10px_#252424]">
        <img
          className="w-[400px] h-[400px]"
          src={recepie.recipe.image}
          alt={recepie.recipe.label}
        />
        <article className="space-y-4 ml-5">
          <h1 className=" text-red-500">{recepie.recipe.source}</h1>
          <h2 className="font-bold text-2xl  font-serif ">
            {recepie.recipe.label}
          </h2>
          <article className="flex space-x-4">
            <p>Kcal: {recepie.recipe.calories.toFixed()}</p>
            <p>Carbs: {recepie.recipe.totalNutrients.CHOCDF.quantity.toFixed()}g</p>
            <p>Fat: {recepie.recipe.totalNutrients.FAT.quantity.toFixed()}g</p>
            <p>Sugar: {recepie.recipe.totalNutrients.SUGAR.quantity.toFixed()}g</p>
          </article>
          <article>
            <p><strong className="text-lg">Cuisine Type: </strong>{recepie.recipe.cuisineType}</p>
            <p><strong className="text-lg">Meal Type:</strong> {recepie.recipe.mealType}</p>
            <p><strong className="text-lg">Diet:</strong> {recepie.recipe.dietLabels}</p>
            <p><strong className="text-lg">Dish Type:</strong> {recepie.recipe.dishType}</p>
          </article>
          <article>          <strong className="text-lg">Ingredients:</strong> 
          <ul className="w-[390px]  h-28 overflow-auto">
            {recepie.recipe.ingredientLines.map(ingredient => <li>{ingredient}</li>)}
          </ul></article>

        </article>
      </section>

      <button className="inline-flex  rounded-md border border-transparent bg-blue-100 px-6 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2" onClick={navigateBack}>Back</button>
    </main>
  );
};

export default RecepieDetails;
