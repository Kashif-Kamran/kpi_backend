const mongoose = require('mongoose');
const errorSolutionSchema = new mongoose.Schema({
    error_id: {
        type: String,
        ref: 'Error',
        required: true
    },
    explanation: {
        type: String,
        unique: true,
    },
    possibleURL: [
        {
            type: String
        }
    ],
    rank: {
        type: Number,
        default: 0
    }
});
module.exports = mongoose.model('ErrorSolution',errorSolutionSchema);