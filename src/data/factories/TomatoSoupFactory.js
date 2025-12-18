import { Ingredient } from "../models/Ingredient.js";
import { Dish } from "../models/Dish.js";

export default class TomatoSoupFactory {
  createDish() {
    const ingredients = [
      new Ingredient("Water", 0.5),
      new Ingredient("Potato", 2),
      new Ingredient("Onion", 2),
      new Ingredient("Carrot", 2),
      new Ingredient("Salt", 1),
      new Ingredient("Pepper", 1),
    ];
    return new Dish("Tomato Soup", "Tasty healthy soup", 13, ingredients);
  }
}
