const mongoose = require('mongoose');
const errorSolutionSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true
    },
    error_id: {
        type: String,
        ref: 'Error',
        required: true
    },
    explanation: {
        type: String
    },
    possibleURL: [
        {
            type: String
        }
    ],
    rank: {
        type: Number
    }
});
module.exports = mongoose.model('ErrorSolution',errorSolutionSchema);