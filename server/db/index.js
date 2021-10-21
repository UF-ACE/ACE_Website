const mongoose = require('mongoose')
const uri = "mongodb+srv://admin:thisisatest@realmcluster.vxfv2.mongodb.net/ACESite?retryWrites=true&w=majority"

mongoose
    .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db