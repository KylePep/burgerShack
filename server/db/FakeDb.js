import { Burger } from "../models/Burger.js";

export const FakeDb = {
  burgers: [
    new Burger({
      id: 0,
      price: 4.99,
      name: 'Bacon egg and beefs'
    }),
    new Burger({
      id: 1,
      price: 6.99,
      name: 'Lean Beef Patty'
    }),
    new Burger({
      id: 2,
      price: 0.99,
      name: 'Pocket Burger'
    }),
    new Burger({
      id: 3,
      price: 1.25,
      name: 'Pocket Burger and cheese'
    })
  ]
}