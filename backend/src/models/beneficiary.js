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
     // autopopulate:{ maxDepth:2 } ,
    },
  ],
})
class Beneficiary {
    addFoodAngels(foodangel) {
     this.foodangels.push(foodangel)
  }

  // kind of order method which allow beneficiary to order and it also assign a unique order number for each order
  async orderFrom(foodangel) {
    const orderNumber = Math.round(Math.random() * 1000000)
    console.log("ok bye")
    if (foodangel.availableMeal > 0) {
      foodangel.addBeneficiaries(this)
      this.addFoodAngels(foodangel)
      console.log("Stop")
      await this.save()
      console.log("ok ok")
      await foodangel.save()
      console.log("return")
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

const seeker=User.discriminator('Beneficiary', beneficiarySchema)
module.exports = seeker
