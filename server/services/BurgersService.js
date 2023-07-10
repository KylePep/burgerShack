import { FakeDb } from "../db/FakeDb.js"
import { BadRequest } from "../utils/Errors.js"

class BurgersService {

  getBurgers() {
    return FakeDb.burgers
  }

  getBurgerById(burgerId) {
    const foundBurger = FakeDb.burgers.find(burger => burger.id == burgerId)
    if (!foundBurger) {
      throw new BadRequest(`${burgerId} was not a valid Id`)
    }
    return foundBurger

  }

  createBurger(burgerData) {
    burgerData.id = FakeDb.burgers.length + 1
    FakeDb.burgers.push(burgerData)
    return burgerData
  }

  deleteBurger(burgerId) {
    const burgerIndex = FakeDb.burgers.findIndex(burger => burger.id == burgerId)
    if (burgerIndex == -1) {
      throw new BadRequest(`${burgerId} was not a valid Id`)
    }
    FakeDb.burgers.splice(burgerIndex, 1)
  }

  updateBurger(burgerId, burgerData) {
    let burgerById = this.getBurgerById(burgerId)
    burgerById.name = burgerData.name || burgerById.name
    burgerById.price = burgerData.price || burgerById.price

    return burgerById
  }

}
export const burgersService = new BurgersService()