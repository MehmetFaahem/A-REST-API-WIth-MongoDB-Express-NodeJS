const mongoose = require('mongoose')

const pointSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Please Add Your UserName']
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Point', pointSchema)