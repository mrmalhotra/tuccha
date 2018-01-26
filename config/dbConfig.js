module.exports = {
    development : 'mongodb://localhost:27017/tuccha',
    production: process.env.MONGO_URI
}