// import mongoose
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// csvTitle: 'Installs (10M)', columnName: 'Installs (10M)', target: 12, data: Array(92)
const PerformanceMetricesSchema = new Schema({
    projectId: {
        type: Schema.Types.ObjectId,
        ref: 'Project',
    },
    csvTitle: {
        type: String,
        required: true,
    },
    metriceName: {
        type: String,
        required: true,
    },
    target: {
        type: Number,
        required: true,
    },
    metricsData: [
        {
            date: {
                type: Date,
            },
            value: {
                type: Number,
            },
        }
    ],
});



const PerformanceMetrices = mongoose.model('PerformanceMetrices',PerformanceMetricesSchema);
module.exports = PerformanceMetrices;