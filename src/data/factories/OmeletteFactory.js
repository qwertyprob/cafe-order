import { Ingredient } from "../models/Ingredient.js";
import { Dish } from "../models/Dish.js";
import omeletteImg from "./img/omelette.jpg";

export default class OmeletteFactory {
  createDish() {
    const ingredients = [
      new Ingredient("Eggs", 3),
      new Ingredient("Milk", 1),
      new Ingredient("Cheese", 3),
      new Ingredient("Salt", 0.5),
      new Ingredient("Pepper", 0.5),
      new Ingredient("Butter", 1),
    ];
    return new Dish(
      "Omelette",
      "Fluffy omelette with cheese",
      10,
      ingredients,
      omeletteImg
    );
  }
}
