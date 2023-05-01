const mongoose = require('mongoose');
const stabilityKpiSchema = new mongoose.Schema({
    _id: {
        type: String,
    },
    project_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project',
        required: true
    }
});
module.exports = mongoose.model('StabilityKpi',stabilityKpiSchema);

