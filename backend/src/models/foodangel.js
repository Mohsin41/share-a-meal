const mongoose = require('mongoose')
// const autopopulate = require('mongoose-autopopulate')
 const passportLocalMongoose = require('passport-local-mongoose')
const User = require('./user.js')

const FoodAngelSchema = new mongoose.Schema({
  name: String,
  address: String,
  cellPhone: Number,
  availableMeal: {
    type: Number,
    default: 0,
  },
  beneficiaries: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Beneficiary',
     autopopulate: { maxDepth: 2, select: '-foodangels' },
    },
  ],
  totalMealDonated: {
    type: Number,
    default: 0,
  }, 
})
 

class FoodAngel {
  // kind of another method which allow foodangels to see the name of all of their foodRecievers
   addBeneficiaries(beneficiary) {
    this.beneficiaries.push(beneficiary)
    this.totalMealDonated++
    this.availableMeal--
   
  }

  async addAvailableMeal(number) {
    this.availableMeal += number
    await this.save()
  
  }

  get overView() {
    return `
     ${this.name} has ${this.availableMeal} meals and 
     it donates ${this.totalMealDonated} meal(s) till now and 
     has ${this.beneficiaries.length} beneficiarie(s)` 
  }
}


FoodAngelSchema.loadClass(FoodAngel)
// FoodAngelSchema.plugin(autopopulate)
FoodAngelSchema.plugin(passportLocalMongoose, {
   usernameField: 'email',
 })
const doner=User.discriminator('FoodAngel' , FoodAngelSchema)
module.exports = doner