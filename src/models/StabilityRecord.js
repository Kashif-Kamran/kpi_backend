const mongoose = require('mongoose');
const stabilityRecordSchema = new mongoose.Schema({
    _id: {
        type: String
        ,required: true
    },
    stabilityKpi_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'StabilityKpi',
        required: true
    },
    date: {
        type: Date
    },
    anr: {
        type: Number
    },
    crash: {
        type: Number
    },
    error_id: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Error'
        }
    ]
});

module.exports = mongoose.model('StabilityRecord',stabilityRecordSchema);
