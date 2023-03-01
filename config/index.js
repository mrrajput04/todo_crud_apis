const dotenv = require('dotenv');
dotenv.config()
module.exports = {
    PORT:process.env.PORT,
    DBURL:process.env.DBURL,
    JWT_SECRET:process.env.JWT_SECRET,
    api_key:process.env.api_key,
    PASSWORD:process.env.PASSWORD
}