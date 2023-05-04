// create new Service class after import Stability Record
const StabilityRecord = require("../models/StabilityRecord");
class StabilityRecordService
{
    constructor()
    {
        this.stabilityRecordSchema = StabilityRecord;
    }
    // Create a function that will give me the latest 3 records basedon on date
    async getLatestStabilityRecordsByStabilityKpiId(stabilityKpiId)
    {
        try
        {
            // Find the 3 latest stability records for the given stabilityKpiId
            const latestRecords = await this.stabilityRecordSchema
                .find({ stabilityKpi_id: stabilityKpiId })
                .sort({ date: 'desc' })
                .limit(1);

            // Return the latest records
            return {
                status: 200,
                data: latestRecords
            };
        } catch (error)
        {
            console.log("error in Stability Records Service",error);
            return {
                status: 500,
                error: {
                    message: "DataBase error occurred at Stability Record Service"
                }
            };
        }
    }
}
const stabilityRecordService = new StabilityRecordService();
module.exports = stabilityRecordService;