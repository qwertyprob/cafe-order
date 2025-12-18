import { Ingredient } from "../Models/Ingredient.js";
import { Dish } from "../Models/Dish.js";

export default class BurgerFactory {
  createDish() {
    const ingredients = [
      new Ingredient("Bun", 2.0),
      new Ingredient("Beef Patty", 6.0),
      new Ingredient("Cheese", 2.0),
      new Ingredient("Lettuce", 1.5),
      new Ingredient("Tomato", 1.5),
      new Ingredient("Onion", 1.0),
      new Ingredient("Sauce", 1.0),
    ];

    return new Dish("Burger", "Juicy beef burger with cheese", 1, ingredients);
  }
}
