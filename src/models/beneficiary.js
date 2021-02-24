// beneficiary class for food seeker with some basic properties
class Beneficiary {
  constructor(name, phone, email) {
    this.name = name
    this.phone = phone
    this.email = email
    this.foodangels = []
  }

  addFoodAngels(foodangel) {
    this.foodangels.push(foodangel)
  }

  // kind of order method which allow beneficiary to order and it also assign a unique order number for each order
  orderFrom(foodangel) {
    const orderNumber = Math.round(Math.random() * 1000000)
    if (foodangel.availableMeal > 0) {
      foodangel.addBeneficiaries(this)
      this.addFoodAngels(foodangel)
      return orderNumber
    }
    return null
  }
}

module.exports = Beneficiary
