const express = require('express');

const router = express.Router();

const FoodAngel = require('../models/foodangel.js')
const Beneficiary = require('../models/beneficiary.js')

const flames = new FoodAngel('flames', 'tonsberg', 95273973, 'example@gmail.com')
const taste = new FoodAngel('taste', 'tonsberg', 95273973, 'example@gmail.com')

flames.addAvailableMeal(10)
taste.addAvailableMeal(10)

const mohsin = new Beneficiary('mohsin', 23232323, 'abc@gmail.com')
const zaib = new Beneficiary('zaib', 23232323, 'abc@gmail.com')

mohsin.orderFrom(flames)
zaib.orderFrom(flames)

mohsin.orderFrom(taste)
zaib.orderFrom(taste)

const users = [flames, taste ]
/* GET users listing. */
router.get('/', (req, res) => {
  let result = users

  if (req.query.name) {
    result = users.filter(user => user.name == req.query.name)
  }

  res.send(result)
})

router.get('/:userId', (req, res) => {
  const user = users[req.params.userId]

  if (user) res.render('user', { user })
  else res.sendStatus(404)
})

module.exports = router;
