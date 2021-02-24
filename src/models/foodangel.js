// class foodAngels who will registers as food doners have some basic properties
class FoodAngel {
  constructor(name, address, cellPhone, email) {
    this.name = name
    this.address = address
    this.availableMeal = 0
    this.cellPhone = cellPhone
    this.email = email
    this.beneficiaries = []
    this.totalMealDonated = 0
  }

  // kind of another method which allow foodangels to see the name of all of their foodRecievers
  addBeneficiaries(beneficiary) {
      this.beneficiaries.push(beneficiary)
      this.totalMealDonated++
      this.availableMeal--
  }

  addAvailableMeal(number) {
    this.availableMeal += number
  }

  get overView() {
    return `
     ${this.name} has ${this.availableMeal} meals and 
     it donates ${this.totalMealDonated} meal(s) till now and 
     has ${this.beneficiaries.length} beneficiarie(s)`
  }
}
module.exports = FoodAngel
