const mongoose = require('mongoose');
const errorSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    type: {
        type: String
    }
});
module.exports = mongoose.model('Error',errorSchema);