// Import Mongoose and Create Project Schema
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const projectSchema = new Schema({
    teamLeadId: {
        type: Schema.Types.ObjectId,
        ref: 'TeamLead',
        required: true
    },
    projectName: {
        type: String,
        required: true
    },
    packageName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    projectStartDate: {
        type: Date,
        default: Date.now
    },
    minDeviceSpecs: {
        minProcessor: {
            type: String,
            required: true
        },
        minRam: {
            type: Number,
            required: true
        },
        minRom: {
            type: Number,
            required: true
        }
    },
    sdkSet: {
        googleAds: {
            type: String,
            required: true
        },
        facebookAds: {
            type: String,
            required: true
        },
        firebase: {
            type: String,
            required: true
        }
    },
    errors: [
        {
            date: {
                type: Date
            },
            error: {
                type: String
            }

        }
    ]
});
// Export Project Model
const Project = mongoose.model('Project',projectSchema);
module.exports = Project;
