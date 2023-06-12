const StabilityKpi = require("../models/StabilityKpi");
const StabilityKpiRecord = require("../models/StabilityRecord");
const ErrorService = require("./Error.service");
const ErrorSolutionService = require("./ErrorSolution.service");
// import axios
const axios = require('axios');
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
    // Function to delete stabilityKpi by project Id
    async deleteStabilityKpiByProjectId(projectId)
    {
        try
        {
            // also delete all Stability Records having stability id 
            const result = await this.stabilityKpiSchema.findOne({ project_id: projectId });
            // delete all records having id of resutl
            await StabilityKpiRecord.deleteMany({ stabilityKpi_id: result._id });
            // Now Delete result as well
            const deletionStatus = this.stabilityKpiSchema.deleteOne({ project_id: projectId });
            console.log("Deletion Status : ",deletionStatus)
            return {
                status: 200,
                data: {
                    message: "Stability Kpi Deleted Successfully",
                    deletedStabilityKpi: deletionStatus
                }
            }
        }
        catch (error)
        {
            console.log("Error : ",error);
            return {
                status: 500,
                error: {
                    message: `Database Error : ${error.message}`
                }
            }
        }
    }
    // function tomake post request of error


    async postError(errorString)
    {
        const url = 'http://127.0.0.1:5000/search_error';
        const data = {
            error_message: errorString,
        };

        try
        {
            const response = await axios.post(url,data);
            return response.data;
        } catch (error)
        {
            console.error('Error occurred during post request:',error);
            return { answer: [] };
        }
    }
    // Adding New Record to Stability Kpi
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
                    // Firstly Verify that Error is not found in DB
                    console.log("-- Error Not Found in DB, Creating New Error");
                    const newError = await ErrorService.createError(title,description);
                    //Scrape the sollutions from Web
                    console.log("-- Scraping Sollutions from web");
                    const solutions = await this.postError(description);
                    console.log("-- Solutions has been scraped");
                    const sols = solutions.answers.map((itr) =>
                    {
                        return {
                            error_id: newError.data.saved._id,
                            explanation: itr[1]
                        }
                    })
                    console.log("solution: ",solutions.answers[0][1]);
                    console.log("-- Saving Sollutions")
                    sols.forEach(async (solObject) =>
                    {
                        const newSolution = await ErrorSolutionService.createErrorSolution(newError.data.saved._id,solObject);
                    })
                    newRecord.error_id = newError.data.saved._id;
                }
                else if (error.status === 200)
                {
                    newRecord.error_id = error.data.retrived._id;
                }
                // Now insert the sollution if exsists
                // const solution = record.possible_fix;
                // console.log("Solution : ",solution);
                // if (solution !== undefined && solution !== "" && solution !== null)
                // {
                //     const solObject = {}
                //     solObject.error_id = newRecord.error_id;
                //     solObject.explanation = solution;
                //     const newSolution = await ErrorSolutionService.createErrorSolution(newRecord.error_id,solObject);
                // }
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
    async getStabilityKpiIdByProjectId(projectId)
    {
        try
        {
            let kpiId = await this.stabilityKpiSchema.findOne({ project_id: projectId });
            return {
                status: 200,
                data: {
                    kpiId: kpiId._id
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

const stabilityKpiService = new StabilityKpiService();
module.exports = stabilityKpiService;