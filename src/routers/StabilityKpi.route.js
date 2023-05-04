const StabilityKpiService = require('../services/StabilityKpi.service');
const StabilityRecordService = require("../services/StabilityRecord.service");
const ErrorService = require("../services/Error.service");
const express = require('express');
const StabilityKpiRouter = express.Router();

StabilityKpiRouter.get('/',async (req,res) =>
{
    console.log("Stability KPI router has been perfectly hit");
    res.send({
        status: 200,
        data: {
            message: "Stability Kpi has been hit"
        }
    })
});
StabilityKpiRouter.get("/project-errors/:id",async (req,res) =>
{
    try
    {

        const result = await StabilityKpiService.getStabilityKpiIdByProjectId(req.params.id);
        if (result.status === 500)
        {
            return res.send(500).send(result);
        }
        // Now get the latest 3 records by stability id
        const records = await StabilityRecordService.getLatestStabilityRecordsByStabilityKpiId(result.data.kpiId);
        // get the error ids from the records

        const errorData = [];
        for (let i in records.data)
        {
            console.log(records.data[i].error_id)
            const date = records.data[i].date;
            let tempError = (await ErrorService.getErrorById(records.data[i].error_id)).data.retrived;
            tempError.date = date;

            console.log("Temp Error : ",tempError)
            errorData.push(tempError)
        }
        res.status(200).send(
            {
                status: 200,
                data: errorData

            }
        );
    }
    catch (error)
    {
        console.log("Error Occured at Get Laetst Errors : ",error);
        res.status(500).send("Error Occured at Get Latest Errors");
    }

});
// export 
module.exports = StabilityKpiRouter;