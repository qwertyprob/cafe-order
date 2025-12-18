import { Ingredient } from "../models/Ingredient.js";
import { Dish } from "../models/Dish.js";

export default class PizzaFactory {
  createDish() {
    const ingredients = [
      new Ingredient("Pizza Sauce", 1),
      new Ingredient("Cheese", 2),
      new Ingredient("Pepperoni", 5),
      new Ingredient("Oregano", 1),
    ];
    return new Dish(
      "Pizza",
      "Delicious cheesy pizza with pepperoni",
      12,
      ingredients
    );
  }
}
