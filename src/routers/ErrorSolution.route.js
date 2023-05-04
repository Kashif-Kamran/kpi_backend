// create router 
const ErrorSollutionRouter = require("express").Router();
// import service
const ErrorSollutionService = require("../services/ErrorSolution.service");

ErrorSollutionRouter.get("/",async (req,res) =>
{
    console.log("Error Sollution Router has been hit");
    return res.send({
        status: 200,
        data: {
            message: "Error Sollution Router has been hit"
        }
    })
});

ErrorSollutionRouter.get("/:id",async (req,res) =>
{
    const result = await ErrorSollutionService.getErrorSolutionById(req.params.id)
    console.log("Result is ",result);
    return res.status(result.status).send(result)
});
// export router
module.exports = ErrorSollutionRouter;