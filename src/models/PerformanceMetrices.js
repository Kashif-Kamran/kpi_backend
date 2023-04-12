// import mongoose
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PerformanceMetricesSchema = new Schema({
    projectId: {
        type: Schema.Types.ObjectId,
        ref: 'Project',
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
    errors: [
        {
            date: {
                type: Date
            },
            errorString: {
                type: String
            }
        }
    ]
});

const PerformanceMetrices = mongoose.model('PerformanceMetrices',PerformanceMetricesSchema);
module.exports = PerformanceMetrices;