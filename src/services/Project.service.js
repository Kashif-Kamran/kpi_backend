const Project = require('../models/Project');
// import PerformanceMetrices model
const PerformanceMetrices = require('../models/PerformanceMetrices');
class ProjectService
{
    constructor()
    {
        this.ProjectSchema = Project;
    }
    async createNewProject(newProjectData,userId)
    {
        try
        {
            let projectInfo = newProjectData.projectInfo;
            projectInfo.teamLeadId = userId;
            let performanceMetrices = newProjectData.performanceMetrices;
            // Saving the Project
            let newProject = new this.ProjectSchema({
                projectName: projectInfo.projectName,
                projectDescription: projectInfo.projectDescription,
                packageName: projectInfo.packageName,
                teamLeadId: userId,
                description: projectInfo.description,
                country: projectInfo.country,
                minDeviceSpecs: projectInfo.minDeviceSpec,
                sdkSet: projectInfo.sdkSet,
            });
            let result = await newProject.save();
            // Get projectId 
            let projectId = result._id;
            let metricToSave = performanceMetrices.map((metrice) =>
            {
                return {
                    projectId: projectId,
                    csvTitle: metrice.csvTitle,
                    metriceName: metrice.columnName,
                    target: metrice.target,
                    metricsData: metrice.metricsData
                }
            })
            let performanceMetricesResult = await PerformanceMetrices.insertMany(metricToSave);
            return {
                status: 200,
                data: {
                    savedProjectId: projectId,
                    message: "Project Created Successfully"
                }
            }


        }
        catch (error)
        {
            console.log("Error in Saving Project (Project Service)",error.message);
            return {
                status: 500,
                error: {
                    message: `Database Error : ${error.message}`
                }
            };
        }
    }
    async getProjectsByTeamLeadId(teamLeadId)
    {
        try
        {
            let projects = await this.ProjectSchema.find({
                teamLeadId: teamLeadId
            });
            let responseData = projects.map((project) =>
            {
                return {
                    projectId: project._id,
                    projectName: project.projectName,
                    startDate: project.projectStartDate
                }
            });
            return {
                status: 200,
                data: responseData
            };
        }
        catch (error)
        {
            console.log("Error in Getting Projects",error.message);
            return {
                status: 500,
                error: {
                    message: `Database Error : ${error.message}`
                }
            };
        }

    }
    async getProjectDetailsById(projectId)
    {
        try
        {
            let projectInfo = await this.ProjectSchema.findOne({ "_id": projectId });
            return {
                status: 200,
                data: {
                    projectInfo: projectInfo,
                }
            };
        }
        catch (error)
        {
            console.log("Error in Getting Project Details",error.message);
            return {
                status: 401,
                error: {
                    message: `Database Error : ${error.message}`
                }
            };
        }
    }
    async deleteProjectById(projectId)
    {
        // first delete all metrices and then delete project info
        try
        {
            // delete the metrices
            let result = await PerformanceMetrices.deleteMany({
                projectId: projectId
            });
            // delete the project
            let project = await this.ProjectSchema.deleteOne({
                _id: projectId
            });
            return {
                status: 200,
                data: project
            };
        }
        catch (error)
        {
            console.log("Error in Deleting Project",error.message);
            return {
                status: 501,
                error: {
                    message: `Database Error : ${error.message}`


                }
            }
        }
    }
    async updateProjectById(projectId,projectData)
    {
        try
        {
            // get Object from mongodb
            let project = await this.ProjectSchema.findOneAndUpdate({ "_id": projectId },projectData)
            return {
                status: true,
                data: project
            };
        } catch (error)
        {
            console.log("Error in Updating Project",error.message);
            return {
                status: false,
                error: {
                    message: `Database Error : ${error.message}`
                }
            }
        }
    }
    // Get project Metrices Targets with name and id Info
    async getProjectMetricesTargets(projectId)
    {
        try
        {
            let projectMetrices = await PerformanceMetrices.find(
                { "projectId": projectId },
                { _id: 1,metricsName: 1,metricsTarget: 1 }
            );
            return {
                status: 200,
                data: projectMetrices
            };
        }
        catch (error)
        {
            console.log("Error in Getting Project Metrices",error.message);
            return {
                status: 500,
                error: {
                    message: `Database Error : ${error.message}`
                }
            }
        }

    }
    // Set target of Performance Matrices
    async setProjectMetricesTarget(matId,newTarget)
    {
        try
        {
            let performanceMetrices = await PerformanceMetrices.findOne({ "_id": matId });
            console.log("Performance Metrices : ",performanceMetrices);
            performanceMetrices.metricsTarget = newTarget;
            await performanceMetrices.save();
            return {
                status: 200,
                data: performanceMetrices
            };
        }
        catch (error)
        {
            console.log(`Database Error While setting Target : ${error.message}`);
            return {
                status: 401,
                error: {
                    message: `Please Enter Integer Value`
                }
            }
        }
    }
    // Get Project Metrices Data
    async getProjectMetrics(projectId)
    {
        try
        {
            let projectMetrices = await PerformanceMetrices.find(
                { "projectId": projectId },{ projectId: 0 }
            );
            //  { _id: 1,metriceName: 1,metricsData: 1,csvTitle: 1 }
            return {
                status: 200,
                data: projectMetrices
            };
        }
        catch (error)
        {
            console.log(`ProjectService + GetProjectMetrics : ${error.message}`);
            return {
                status: 500,
                error: {
                    message: "Metrices Not Found"
                }
            }
        }

    }
}
// export Project service
module.exports = ProjectService;
