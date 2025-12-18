import { Ingredient } from "../Models/Ingredient.js";
import { Dish } from "../Models/Dish.js";

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
