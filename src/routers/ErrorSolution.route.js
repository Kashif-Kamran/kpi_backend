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
    return res.status(result.status).send(result)
});
ErrorSollutionRouter.post("/rank-up/:id",async (req,res) =>
{
    console.log("This is New Error Sollution",req.params.id)
    const result = await ErrorSollutionService.rankErrorSolution(req.params.id)
    return res.status(result.status).send(result)
    // return res.status(200).send("This is New Error Sollution")
})
// export router
module.exports = ErrorSollutionRouter;