const mongoose = require('mongoose')

const baseOptions = {
    discriminatorKey: 'type',
    collection: 'User'
}
const User = mongoose.model('User', new mongoose.Schema({}, baseOptions));

module.exports = mongoose.model('User',User)