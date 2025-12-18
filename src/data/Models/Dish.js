export class Dish {
  name;
  description;
  price;
  timeToCook;
  ingredients;

  constructor(name, description, timeToCook, ingredients = []) {
    this.name = name;
    this.description = description;
    this.timeToCook = timeToCook;
    this.ingredients = ingredients;
    this.price = this.getPrice(ingredients);
  }

  getPrice() {
    return this.ingredients.reduce(
      (total, ingredient) => total + (ingredient?.price || 0),
      0
    );
  }
}
