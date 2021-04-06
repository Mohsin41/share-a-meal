const mongoose = require('mongoose')
const passportLocalMongoose = require('passport-local-mongoose')

const baseOptions = {
    discriminatorKey: 'type',
    collection: 'User'
}
// eslint-disable-next-line no-unused-vars
const UserSchema =new mongoose.Schema({},baseOptions)


UserSchema.plugin(passportLocalMongoose, {
    usernameField:'email',
})
const User = mongoose.model('User', UserSchema);
module.exports = User