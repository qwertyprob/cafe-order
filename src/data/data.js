import { Cook } from "./models/Cook.js";

//factories
import BurgerFactory from "./factories/BurgerFactory.js";
import OmeletteFactory from "./factories/OmeletteFactory.js";
import PizzaFactory from "./factories/PizzaFactory.js";
import SaladFactory from "./factories/SaladFactory.js";
import SandwichFactory from "./factories/SandwichFactory.js";
import TomatoSoupFactory from "./factories/TomatoSoupFactory.js";

const factories = [
  new BurgerFactory(),
  new OmeletteFactory(),
  new PizzaFactory(),
  new SaladFactory(),
  new SandwichFactory(),
  new TomatoSoupFactory(),
];

//All dishes cafe had
const allDishes = factories.map((factory) => factory.createDish());

const allCooks = [new Cook("Andrew"), new Cook("Tom"), new Cook("Antonio")];

export { allDishes as dishes, allCooks as cooks };
