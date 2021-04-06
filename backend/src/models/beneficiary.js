const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')
const passportLocalMongoose = require('passport-local-mongoose')
const User = require('./user.js')
// beneficiary class for food seeker with some basic properties
const beneficiarySchema = new mongoose.Schema({
  name: String,
  cellPhone: Number,
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
    await this.foodangels.push(foodangel)
  }

  // kind of order method which allow beneficiary to order and it also assign a unique order number for each order
  async orderFrom(foodangel) {
    const orderNumber = Math.round(Math.random() * 1000000)
    if (foodangel.availableMeal > 0) {
      foodangel.addBeneficiaries(this)
      this.addFoodAngels(foodangel)
      await this.save()
      await foodangel.save()
      return orderNumber
    }

    return 'Oh snap,No meal available,please try next time'
  }
}
beneficiarySchema.loadClass(Beneficiary)
beneficiarySchema.plugin(autopopulate)
beneficiarySchema.plugin(passportLocalMongoose, {
  usernameField: 'email',
}) 

const seeker=User.discriminator('beneficiary', beneficiarySchema)
module.exports = seeker
