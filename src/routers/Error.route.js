const errorRouter = require('express').Router();
// import Error.service
const errorService = require('../services/Error.service');
const verifyToken = require('../verifyToken');
errorRouter.get('/',verifyToken,(req,res) =>
{
    console.log("Route Hit")
    res.send({
        status: true,
        message: "Error Router is Working"
    });
});
// Create Route to get latest 10 errors by project id
errorRouter.get('/latest-errors/:id',verifyToken,async (req,res) =>
{

    console.log("Latest Errors Route Hit : ",req.params.id);
    console.log("User Info : ",req.userInfo);
    res.send({
        status: true,
        message: "Latest Errors Route Hit"
    })
});
// export router
module.exports = errorRouter;
