const mongoose = require('mongoose');
const stabilityKpiSchema = new mongoose.Schema({
    project_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project',
    }
});

module.exports = mongoose.model('StabilityKpi',stabilityKpiSchema);

