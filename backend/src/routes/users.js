const express = require('express')

const router = express.Router()

// const User = require('../models/user.js')

const FoodAngel = require('../models/foodangel.js')
const Beneficiary = require('../models/beneficiary.js')

router.get('/', async (req, res) => {
  const query = {}

  if (req.query.name) {
    query.name = req.query.name
  }

  if (req.query.address) {
    query.address = req.query.address
  }
  res.send(await FoodAngel.find(query))
})

router.get('/initialize', async (req, res) => {
  const flames = new FoodAngel({
    name: 'flames',
    address: 'tonsberg',
    cellPhone: 95273973,
    email: 'example@gmail.com',
  })
  await flames.setPassword('abc')
  await flames.save()

  const taste = new FoodAngel({
    name: 'taste',
    address: 'bjerke',
    cellPhone: 95273974,
    email: 'example1@gmail.com',
  })
  await taste.setPassword('abc')
  await taste.save()

  await flames.addAvailableMeal(10)
  await taste.addAvailableMeal(10)

  const mohsin = await Beneficiary.create({ name: 'mohsin', phone: 23232323, email: 'abc@gmail.com' })
  const zaib = await Beneficiary.create({ name: 'zaib', phone: 33232323, email: 'abcd@gmail.com' })

  await mohsin.orderFrom(flames)
  await zaib.orderFrom(flames)

  await mohsin.orderFrom(taste)
  await zaib.orderFrom(taste)

  const users = [flames, taste]
  const ben = [mohsin, zaib]

  console.log(users)
  console.log(ben)
  res.sendStatus(200)
})

router.get('/:userId', async (req, res) => {
  const user = await FoodAngel.findById([req.params.userId])

  if (user) res.send(user)
  else res.sendStatus(404)
})

module.exports = router
