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
teamLeadRouter.post("/forget-password",(req,res) =>
{
    // log the reqest body
    console.log("Request Body : ",req.body);
    return res.status(200).send({
        status: 200,
        data: {
            message: "Yes You Are Here",
        }
    })
})


module.exports = teamLeadRouter;