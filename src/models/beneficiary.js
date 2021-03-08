const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')

// beneficiary class for food seeker with some basic properties
const beneficiarySchema = new mongoose.Schema({
  name: String,
  cellPhone: Number,
  email: {
    type: String,
    unique: true,
    required: true,
  },
  foodangels: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'FoodAngel',
      autopopulate: true,
    },
  ],
})
class Beneficiary {
  async addFoodAngels(foodangel) {
    this.foodangels.push(foodangel)
    await foodangel.save()
  }

  // kind of order method which allow beneficiary to order and it also assign a unique order number for each order
  orderFrom(foodangel) {
    const orderNumber = Math.round(Math.random() * 1000000)
    if (foodangel.availableMeal > 0) {
      foodangel.addBeneficiaries(this)
      this.addFoodAngels(foodangel)
      return orderNumber
    }

    return 'Oh snap,No meal available,please try next time'
  }
}
beneficiarySchema.loadClass(Beneficiary)
beneficiarySchema.plugin(autopopulate)
module.exports = mongoose.model('Beneficiary', beneficiarySchema)
