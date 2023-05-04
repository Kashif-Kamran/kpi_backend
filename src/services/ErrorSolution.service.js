// create new Service class after import Error Sollution
const ErrorSolution = require("../models/ErrorSolution");


class ErrorSolutionService
{
    constructor()
    {
        this.errorSolutionSchema = ErrorSolution;
    }
    // function to insert sollution for a specfic error id
    async createErrorSolution(errorId,solution)
    {
        try
        {
            console.log("Error Id : ",errorId);
            console.log("Solution : ",solution);
            // Firstly get Error By Sollution explaination
            const solutionByExplaination = await this.errorSolutionSchema.findOne({ error_id: errorId,explanation: solution.explanation });
            if (solutionByExplaination !== null)
            {
                console.log("Solution Already Exists")
                return {
                    status: 200,
                    data: {
                        message: "This Solution Already Exists for this Error",
                        solution: solutionByExplaination
                    }
                }
            }
            const newErrorSolution = new this.errorSolutionSchema({
                error_id: errorId,
                explanation: solution.explanation
            });
            console.log("New Error Solution : ",newErrorSolution);
            const result = await newErrorSolution.save();
            return {
                status: 200,
                data: {
                    saved: result,
                    message: "Error Solution Created Successfully"
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
    async getErrorsSolutionsByErrorId(errorId)
    {
        try
        {
            const errorsSolutions = await this.errorSolutionSchema.find({ error_id: errorId });
            if (errorsSolutions.length === 0)
            {
                return {
                    status: 404,
                    error: {
                        message: "Error Solutions Not Found"
                    }
                }
            }
            return {
                status: 200,
                data: {
                    retrived: errorsSolutions
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
    async getErrorSolutionById(errorId)
    {
        try
        {
            const errorSolution = await this.errorSolutionSchema.find({ error_id: errorId });
            if (errorSolution === null)
            {
                return {
                    status: 404,
                    error: {
                        message: "Error Solution Not Found"
                    }
                }
            }
            console.log("Error Solution : ",errorSolution);
            return {
                status: 200,
                data: errorSolution

            }


        }
        catch (error)
        {
            console.log("Error Occured while gettting Error Sollution");
            return {
                status: 500,
                error: {
                    message: `Database Error : ${error.message}`
                }
            }
        }
    }
}
const errorSolutionService = new ErrorSolutionService();
module.exports = errorSolutionService;