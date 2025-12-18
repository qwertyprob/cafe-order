import { Ingredient } from "../Models/Ingredient.js";
import { Dish } from "../Models/Dish.js";

export default class SandwichFactory {
  createDish() {
    const ingredients = [
      new Ingredient("Bread", 2),
      new Ingredient("Turkey", 4),
      new Ingredient("Bacon", 3),
      new Ingredient("Cheese", 2),
      new Ingredient("Lettuce", 1),
      new Ingredient("Tomato", 1),
      new Ingredient("Mayonnaise", 1),
    ];
    return new Dish(
      "Sandwich",
      "Classic sandwich with turkey, bacon, and cheese",
      5,
      ingredients
    );
  }
}
