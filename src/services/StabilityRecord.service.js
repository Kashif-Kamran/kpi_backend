// create new Service class after import Stability Record
const StabilityRecord = require("../models/StabilityRecord");
class StabilityRecordService
{
    constructor()
    {
        this.stabilityRecordSchema = StabilityRecord;
    }
}
const stabilityRecordService = new StabilityRecordService();
module.exports = stabilityRecordService;