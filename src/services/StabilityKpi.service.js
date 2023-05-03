const StabilityKpi = require("../models/StabilityKpi");
const StabilityKpiRecord = require("../models/StabilityRecord");
const ErrorService = require("./Error.service");
class StabilityKpiService
{
    constructor()
    {
        this.stabilityKpiSchema = StabilityKpi;
    }
    // Function that will create project Id
    async createStabilityKpi(projectId)
    {
        try
        {
            // create new object of stabilityKpiSchema
            let newStabilityKpi = new this.stabilityKpiSchema({
                project_id: projectId
            });
            // save the new stabilityKpi
            let result = await newStabilityKpi.save();
            return {
                status: 200,
                data: {
                    savedStabilityKpi: result,
                    message: "Stability Kpi Created Successfully"
                }
            }
        }
        catch (err)
        {
            console.log("Error : ",err);
            return {
                status: 500,
                error: {
                    message: `Database Error : ${err.message}`
                }
            }
        }
    }
    async addNewRecord(projectInfo,record)
    {

        function tokenizeUntilNewline(str)
        {
            const newlineIndex = str.indexOf('\n');
            if (newlineIndex !== -1)
            {
                return str.substring(0,newlineIndex);
            } else
            {
                return str;
            }
        }
        try
        {
            const stabilityKpi = await this.stabilityKpiSchema.findOne({ project_id: projectInfo.projectId })
            const stabilityKpiId = stabilityKpi._id;
            const newRecord = {
                stabilityKpi_id: stabilityKpiId,
                date: projectInfo.newDate,
                anr: record.ANR,
                crash: record.Crashes,
                error_id: null
            }
            const description = record.Vital;
            if (description !== undefined && description !== "" && description !== null)
            {
                const title = tokenizeUntilNewline(record.Vital);

                const error = await ErrorService.getErrorByTitle(title);
                if (error.status === 404)
                {
                    // Now new Error Should be created
                    const newError = await ErrorService.createError(title,description);
                    newRecord.error_id = newError.data.saved._id
                }
                else if (error.status === 200)
                {
                    newRecord.error_id = error.data.retrived._id;
                }
            }
            const newStabilityRecord = new StabilityKpiRecord(newRecord);
            const result = await newStabilityRecord.save();
            return {
                status: 200,
                data: {
                    saved: result,
                    message: "Stability Record Created Successfully"
                }
            }
        }
        catch (error)
        {
            console.log("Error : ",error);
            return {
                status: 500,
                error: {
                    message: `Database Error At StabilityKPI.service : ${error.message}`
                }
            }
        }
    }
}
// Exporting the class
const stabilityKpiService = new StabilityKpiService();
module.exports = stabilityKpiService;