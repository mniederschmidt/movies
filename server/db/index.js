const mongoose = require('mongoose')
const uri = 'mongodb+srv://default-user:WWTSTEM2020@graphite-aivmq.mongodb.net/movies?retryWrites=true&w=majority'

mongoose
    .connect(uri, { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db