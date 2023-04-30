const PerformanceMetrices = require('../models/PerformanceMetrices');

class PerformanceMetricService
{
    // constructor
    constructor()
    {
        this.PMSchema = PerformanceMetrices;
        this.metrices = [
            {
                csvTitle: "Installs",
                metriceName: "Installs",
                target: 10,
                metricsData: []
            },
            {
                csvTitle: "Daily Active Users",
                metriceName: "DAU",
                target: 10,
                metricsData: []
            },
            {
                csvTitle: "DAU/Install",
                metriceName: "DAU/Install",
                target: 10,
                metricsData: []
            },
            {
                csvTitle: "Play Time",
                metriceName: "PT",
                target: 10,
                metricsData: []
            },
            {
                csvTitle: "Day One Retention",
                metriceName: "D1",
                target: 10,
                metricsData: []
            },
            {
                csvTitle: "IMP / DAU",
                metriceName: "IMP",
                target: 10,
                metricsData: []
            },
            {
                csvTitle: "Crashes",
                metriceName: "Crashes",
                target: 10,
                metricsData: []
            },
            {
                csvTitle: "ANR",
                metriceName: "ANR",
                target: 10,
                metricsData: []
            }
        ]
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

    // Create Empty Performance Metrices
    async createEmptyPerformanceMetrices(projectId)
    {
        try
        {
            const createMetrices = this.metrices.map((itr) =>
            {
                return {
                    projectId: projectId,
                    csvTitle: itr.csvTitle,
                    metriceName: itr.metriceName,
                    target: itr.target,
                    metricsData: []
                }
            })
            let result = await this.PMSchema.insertMany(createMetrices);
            return {
                status: 200,
                data: result
            };
        }
        catch (error)
        {
            console.log("Error in Creating Empty Performance Metrices",error.message);
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
                console.log(project.metricsData[project.metricsData.length - 2])
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
    // add new Record
    async addNewRecordWithoutDate(projectInfo,newRecord)
    {
        try
        {
            // Get All Metrices of Project
            let metrices = await this.PMSchema.find({
                projectId: projectInfo.projectId
            });
            // Seperating Out every thing
            const install = metrices.find(itr => itr.metriceName == "Installs");
            const dau = metrices.find(itr => itr.metriceName == "DAU");
            const dau_installs = metrices.find(itr => itr.metriceName == "DAU/Install");
            const pt = metrices.find(itr => itr.metriceName == "PT");
            const d1 = metrices.find(itr => itr.metriceName == "D1");
            const imp = metrices.find(itr => itr.metriceName == "IMP");
            const crashes = metrices.find(itr => itr.metriceName == "Crashes");
            const anr = metrices.find(itr => itr.metriceName == "ANR");
            // Print Metrices Name
            // Push new Record in each of ubove metrices
            let newDate = projectInfo.publishedDate;
            newDate.setDate(newDate.getDate() + install.metricsData.length);
            console.log("newDate : ",newDate);
            // { Installs,DAU,DAU_Install,PT,D1,ANR,Crashes,IMP_DAU };
            install.metricsData.push({ date: newDate,value: newRecord.Installs });
            dau.metricsData.push({ date: newDate,value: newRecord.DAU });
            dau_installs.metricsData.push({ date: newDate,value: newRecord.DAU_Install });
            pt.metricsData.push({ date: newDate,value: newRecord.PT });
            d1.metricsData.push({ date: newDate,value: newRecord.D1 });
            imp.metricsData.push({ date: newDate,value: newRecord.IMP_DAU });
            crashes.metricsData.push({ date: newDate,value: newRecord.Crashes });
            anr.metricsData.push({ date: newDate,value: newRecord.ANR });
            // Save All Metrices

            console.log("install : ",install.metricsData);
            console.log("dau : ",dau.metricsData);
            console.log("dau_installs : ",dau_installs.metricsData);
            console.log("pt : ",pt.metricsData);
            console.log("d1 : ",d1.metricsData);
            console.log("imp : ",imp);
            console.log("crashes : ",crashes.metricsData);
            console.log("anr : ",anr.metricsData);
            await install.save();
            await dau.save();
            await dau_installs.save();
            await pt.save();
            await d1.save();
            await imp.save();
            await crashes.save();
            await anr.save();
        }
        catch (error)
        {
            console.log("Error in Adding New Record",error.message);
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

