const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')
const passportLocalMongoose = require('passport-local-mongoose')

const baseOptions = {
    discriminatorKey: 'type',
    collection: 'User'
}
// eslint-disable-next-line no-unused-vars
const UserSchema =new mongoose.Schema({},baseOptions)

UserSchema.plugin(autopopulate)

UserSchema.plugin(passportLocalMongoose, {
    usernameField:'email',
})
const User = mongoose.model('User', UserSchema);
module.exports = User