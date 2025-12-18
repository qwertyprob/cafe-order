export class Dish {
  name;
  description;
  price;
  timeToCook;
  ingredients;
  image;

  constructor(name, description, timeToCook, ingredients = [], image = "") {
    this.name = name;
    this.description = description;
    this.timeToCook = timeToCook;
    this.ingredients = ingredients;
    this.price = this.getPrice(ingredients);
    this.image = image;
  }

  getPrice() {
    return this.ingredients.reduce(
      (total, ingredient) => total + (ingredient?.price || 0),
      0
    );
  }
}
