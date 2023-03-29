const PerformanceMetrices = require('../models/PerformanceMetrices');

class PerformanceMetricService
{
    // constructor
    constructor()
    {
        this.PMSchema = PerformanceMetrices;
    }
    // Function that will take project id and add values in performance metrices
    async addPerformanceMetrices(projectId,performanceMetrices)
    {
        try
        {
            let result = await this.PMSchema.create({
                projectId: projectId,
                performanceMetrices: performanceMetrices
            });
            return {
                status: 200,
                data: result
            };
        }
        catch (error)
        {
            console.log("Error in Adding Performance Metrices",error.message);
            return {
                status: 401,
                error: {
                    message: `Database Error : ${error.message}`
                }
            };
        }
    }
    // For each project id and data 
    async addPerformanceMetricesData(projectId,performanceMetricesData)
    {
        try
        {
            // let result = await this.PMSchema.find({
            //     projectId: projectId+++
            // });
            let dataToSave = Object.keys(performanceMetricesData).map((itr) =>
            {
                const [title,target] = itr.split(/(?<=^\S+)\s(?=\S)/);
                return {
                    metriceName: title,
                    data: String(performanceMetricesData[itr].replace(',',''))
                }
            })
            // console.log("Data : ",dataToSave);
            dataToSave.filter(x => x.metriceName.toLowerCase() != "date").forEach(async (itr) =>
            {
                console.log("itr : ",itr.metriceName,"data :",itr.data);
                // Firstly find the metricName and get last date
                let project = await this.PMSchema.findOne({
                    projectId: projectId,
                    metriceName: itr.metriceName
                });
                console.log("project : ",project._id,project.metriceName);
                let lastestDate = new Date(project.metricsData[project.metricsData.length - 1].date);
                lastestDate.setDate(lastestDate.getDate() + 1);
                console.log("lastestDate : ",lastestDate);
                // Now find the date and update the value
                let result = await this.PMSchema.updateOne({
                    projectId: projectId,
                    metriceName: itr.metriceName
                }
                    ,{
                        $push: {
                            metricsData: {
                                date: lastestDate,
                                value: itr.data
                            }
                        }
                    });


            })

        }
        catch (error)
        {
            console.log("Error in Adding Performance Metrices Data",error.message);
            return {
                status: 401,
                error: {
                    message: `Database Error : ${error.message}`
                }
            };
        }
    }

}
const performanceMetricService = new PerformanceMetricService();
module.exports = performanceMetricService;