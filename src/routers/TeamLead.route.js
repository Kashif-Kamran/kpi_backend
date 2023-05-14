// Import Router 
const teamLeadRouter = require('express').Router();
const TeamLeadService = require('../services/TeamLead.service'); // Import TeamLead Service
const teamLeadService = new TeamLeadService();
const verifyToken = require('../verifyToken'); // Import Verify Token
// Check Weather Server is running or not
teamLeadRouter.get('/',(req,res) =>
{
    res.send({
        status: true,
        message: "Team Lead Router is Working"
    });
});
// Register TeamLead
teamLeadRouter.post('/register',async (req,res) =>
{
    console.log("Register Path Hit : ",req.body);
    let result = await teamLeadService.addNewTeamLead(req.body);
    res.status(result.status).send(result);
});
// Create Login Route
teamLeadRouter.post('/login',async (req,res) =>
{
    console.log("Login Route Hit :  ",req.body);
    let result = await teamLeadService.login(req.body);
    res.status(result.status).send(result);
});
// Get Team LeadInfo
teamLeadRouter.get("/teamleadinfo",verifyToken,async (req,res) =>
{
    console.log("Team Lead Info Route Hit : ",req.userInfo);
    let logedInTeamLead = await teamLeadService.getTeamLeadById(req.userInfo.id);

    if (!logedInTeamLead.status)
    {
        return res.status(404).send(logedInTeamLead);
    }
    let readyToSend = logedInTeamLead.data;
    readyToSend.password = undefined;
    return res.send(readyToSend);
});
teamLeadRouter.post("/forget-password",async (req,res) =>
{
    console.log("Forget Password Route Hit : ",req.body);
    const response = await teamLeadService.getTeamLeadByUsername(req.body.username);
    if (response.status == 404)
    {
        return res.status(404).send({ status: 404,error: { message: "Team Lead Not Found" } });
    }
    if (response.data.uniqueAnswer != req.body.uniqueAnswer)
    {
        return res.status(404).send({ status: 404,error: { message: "Unique Answer Not Matched" } });
    }

    let result = await teamLeadService.updatePassword(response.data._id,req.body.newPassword);
    return res.status(result.status).send(result);
    
})


module.exports = teamLeadRouter;