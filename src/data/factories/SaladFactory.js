import { Ingredient } from "../models/Ingredient.js";
import { Dish } from "../models/Dish.js";

export default class SaladFactory {
  createDish() {
    const ingredients = [
      new Ingredient("Lettuce", 1),
      new Ingredient("Cucumber", 2),
      new Ingredient("Tomato", 2),
      new Ingredient("Olive Oil", 3),
      new Ingredient("Salt", 1),
      new Ingredient("Pepper", 1),
    ];
    return new Dish("Salad", "Tasty healthy salad", 5, ingredients);
  }
}
