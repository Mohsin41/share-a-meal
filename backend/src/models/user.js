const mongoose = require('mongoose')

const baseOptions = {
    discriminatorKey: 'type',
    collection: 'User'
}
// eslint-disable-next-line no-unused-vars
const User= mongoose.model('User', new mongoose.Schema({}, baseOptions));

module.exports = User