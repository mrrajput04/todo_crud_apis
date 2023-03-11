const userData = require('./user')
const todoSchema = require('./todo');
const tagsSchema = require('./tags');
const otpSchema = require('./otp')
const RefreshToken = require('./refreshToken')

module.exports = {
    userData,
    todoSchema,
    tagsSchema,
    otpSchema,
    RefreshToken
}