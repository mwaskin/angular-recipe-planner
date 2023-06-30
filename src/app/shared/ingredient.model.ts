export class Ingredient {
  // public name: string;
  // public amount: number;

  // **TS shortcut to declare properties and assign them values corresponding to the arguments passed to the constructor; replaces commented code**
  constructor(public name: string, public amount: number) {
    // this.name = name;
    // this.amount = amount;
  }
}
