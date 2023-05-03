const mongoose = require('mongoose');
const errorSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    frequency: {
        type: Number,
        default: 0
    }
});
module.exports = mongoose.model('Error',errorSchema);