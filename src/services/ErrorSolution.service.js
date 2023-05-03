// create new Service class after import Error Sollution
const ErrorSolution = require("../models/ErrorSolution");


class ErrorSolutionService
{
    constructor()
    {
        this.errorSolutionSchema = ErrorSolution;
    }
}

const errorSolutionService = new ErrorSolutionService();
module.exports = errorSolutionService;