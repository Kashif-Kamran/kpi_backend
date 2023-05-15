// Import Team Lead Model 
const TeamLead = require('../models/TeamLead');
// import jsonwebtoken
const jwt = require('jsonwebtoken');

// Create Team Lead Service

class TeamLeadService
{
    // Create Constructor with 
    constructor()
    {
        this.teamLead = TeamLead;
    }
    // Create New TeamLead  
    async addNewTeamLead(newTeamLead)
    {
        // Find if user is present with the username
        console.log("New Team Lead : ",newTeamLead);
        let user = await this.teamLead.findOne({ username: newTeamLead.username })
        // If user is present then return false
        if (user)
            return {
                status: 401,
                error: {
                    message: "Username Already Exists"
                }
            };

        // Check if Email is Already taken or not
        let emailuser = await this.teamLead.findOne({ email: newTeamLead.email })
        if (emailuser)
            return {
                status: 401,
                error: {
                    message: "Email Already Exists"
                }
            };

        // If user is not present then create new user

        try
        {
            let teamLead = new this.teamLead(newTeamLead);
            let result = await teamLead.save();
            return {
                status: 200,
                data: result
            };
        }
        catch (error)
        {
            console.log("Error in Saving Team Lead",error.message);
            return {
                status: 500,
                error: {
                    message: `Database Error : ${error.message}`
                }
            };
        }
    }
    async login(data)
    {
        // Check if user is present
        let user = await this.teamLead.findOne({ username: data.username });
        if (!user)
            return {
                status: 401,
                error: {
                    message: "User Not Found"
                }
            };
        // Check if password is correct
        if (data.password !== user.password)
        {
            console.log("Password is Incorrect")
            return {
                status: 401,
                error: {
                    message: "Password is Incorrect"
                }
            };
        }
        // Create Token
        console.log("User Ready to be loged in : ",user);
        // Generate Token
        let token = jwt.sign({ id: user._id },"kashifkarman");
        console.log("Token : ",token);
        return {
            status: 200,
            data: {
                token: token
            }
        }
    }
    // Authenticate new User
    async authenticateUser(token)
    {
        try
        {
            let verified = jwt.verify(token,"kashifkarman");
            console.log("Verified : ",verified);
            let user = await this.teamLead.findOne({ _id: verified.id });
            console.log("User : ",user);
            if (!user)

                return {
                    status: 404,
                    error: {
                        message: "User Not Found"
                    }
                };
            return {
                status: 200,
                data: user
            };
        } catch (error)
        {
            return {
                status: 500,
                error: {
                    message: "Invalid Token"
                }
            };
        }
    }
    // Get Team Lead By Id
    async getTeamLeadById(id)
    {
        try
        {
            let teamLead = await this.teamLead.findOne({ _id: id });
            if (!teamLead)
                return {
                    status: 404,
                    error: {
                        message: "Team Lead Not Found"
                    }
                };
            return {
                status: 200,
                data: teamLead
            };
        } catch (error) 
        {
            return {
                status: 500,
                error: {
                    message: "Database Error"
                }
            };

        }
    }
    // update password
    async updatePassword(userId,newPassword)
    {
        try
        {
            console.log("Request : ",newPassword,userId);
            const result = await this.teamLead.updateOne({ _id: userId },{ password: newPassword });
            console.log("Result : ",result);
            return {
                status: 200,
                data: {
                    message: "Password Updated Successfully"
                }
            }
        } catch (error)
        {
            return {
                status: 500,
                error: {
                    message: "Database Error"
                }
            };
        }
    }
    // get teamlead by username
    async getTeamLeadByUsername(username)
    {
        try
        {
            const teamLead = await this.teamLead.findOne({ username: username });
            if (!teamLead)
                return {
                    status: 404,
                    error: {
                        message: "Team Lead Not Found"
                    }
                };
            return {
                status: 200,
                data: teamLead
            };

        } catch (error)
        {
            return {
                status: 500,
                error: {
                    message: "Database Error while loading team lead by username"
                }
            };
        }
    }
    // update TeamLead Data 
    async updateTeamLeadData(teamLeadId,teamLeadData)
    {
        try
        {
            console.log("Team Lead Data : ",teamLeadData);
            console.log("Team Lead ID : ",teamLeadId);
            // update team lead Data
            await this.teamLead.updateOne({ _id: teamLeadId },teamLeadData);
            return {
                status: 200,
                data: {
                    message: "Team Lead Data Updated Successfully"
                }
            }
        }
        catch (error)
        {
            return {
                status: 500,
                error: {
                    message: "Database Error while loading team lead by username"
                }
            };
        }
    }
}


module.exports = TeamLeadService;