const dotenv = require('dotenv');
dotenv.config()
module.exports = {
    PORT:process.env.PORT || 3000,
    DBURL:process.env.DBURL,
    JWT_SECRET:process.env.JWT_SECRET,
    REFRESH_SECRET:process.env.REFRESH_SECRET,
    PASSWORD:process.env.PASSWORD
}