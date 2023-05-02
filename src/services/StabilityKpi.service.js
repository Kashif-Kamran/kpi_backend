const StabilityKpi = require("../models/StabilityKpi");

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
            console.log("======Saving Empty Stability Kpi, Service======");
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
}
// Exporting the class
const stabilityKpiService = new StabilityKpiService();
module.exports = stabilityKpiService;