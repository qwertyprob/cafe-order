import { dishes } from "../data/data.js";

export default function App() {
  return (
    <main className="bg-gray-100 min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
        Cafe Menu
      </h1>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {dishes.map((dish) => (
          <div
            key={dish.name}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-6 flex flex-col justify-between"
          >
            <div>
              <h2 className="text-2xl font-semibold mb-2 text-gray-900">
                {dish.name}
              </h2>
              <p className="text-gray-600 mb-4">{dish.description}</p>
              <p className="font-bold mb-4 text-lg text-gray-800">
                Price: ${dish.getPrice()}
              </p>
              <img
                src={dish.image}
                alt={dish.name}
                className="w-full w-30  object-cover rounded-lg mb-4"
              />

              <h3 className="text-lg font-semibold mb-2 text-gray-900">
                Ingredients:
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {dish.ingredients.map((ingredient, idx) => (
                  <li key={`${dish.name}-${ingredient.name}-${idx}`}>
                    {ingredient.name} - ${ingredient.price}
                  </li>
                ))}
              </ul>
            </div>

            <button className="mt-6 py-2 bg-blue-400 text-white font-semibold rounded-lg hover:bg-blue-500 transition-colors">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
