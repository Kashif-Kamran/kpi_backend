const path = require("path");
const csv = require("csv-parser");
const fs = require("fs");
const schedule = require("node-schedule");
// require the service of project service
const projectService = require("./Project.service");
// require the performance metrices service
const performanceMetricesService = require("./PerformanceMetric.service");

var mockApiData = [];
var iterator = 0;

async function readDataFromFile()
{

    // read the file at csvFilePath and log the data
    await new Promise((resolve) =>
    {
        const csvFilePath = path.join(__dirname,'../','Data','Data_Updated.csv');
        console.log("File : Path : ",csvFilePath)
        fs.createReadStream(csvFilePath)
            .pipe(csv())
            .on("data",(row) =>
            {
                mockApiData.push(row);
            })
            .on("end",() =>
            {
                console.log("---- File Read Completed ----");
                resolve(); // Resolve the promise when file reading is completed
            });
    });
    fileRead = true;
}
// 
function extractErrorSubstring(inputString,searchStr,sliceLength)
{
    const searchIndex = inputString.indexOf(searchStr)
    if (searchIndex !== -1) 
    {
        const startIndex = searchIndex + searchStr.length;
        const endIndex = startIndex + sliceLength;
        return searchStr + inputString.slice(startIndex,endIndex);
    }
    return inputString;
}
// This will return new Record from the mockApiData
function getNewApiRecord()
{
    if (iterator >= mockApiData.length)
    {
        iterator = 0;
    }
    const record = mockApiData[iterator];
    iterator++;
    // Disintegerate Record in seperate values
    const Installs = parseFloat(record["Installs (10M)"]);
    const DAU = parseFloat(record["DAU"]);
    const DAU_Install = parseFloat(record["DAU/Install (1.2+)"]);
    const PT = parseFloat(record["PT (600+)"]);
    const D1 = parseFloat(record["D1 (25+)"]);
    const ANR = parseFloat(record["ANR (0.25-)"]);
    const Crashes = parseFloat(record["Crashes (0.1-)"]);
    const IMP_DAU = parseFloat(record["IMP / DAU (8+)"]);
    const Vital = record["Vital"];
    return { Installs,DAU,DAU_Install,PT,D1,ANR,Crashes,IMP_DAU };
}
readDataFromFile();
// create a job that runs at every 5 seconds
const job = schedule.scheduleJob("*/5 * * * * *",async () =>
{
    if (mockApiData.length === 0)
    {
        console.log("Data is not ready yet");
        return;
    }
    const projects = await projectService.getAllProjects();
    if (projects.data.length === 0)
    {
        console.log("No Projects Found");
        iterator = 0;
        return;
    }
    const record = getNewApiRecord();
    const projectsInfo = projects.data.map((project) =>
    {
        return {
            projectId: project._id,
            publishedDate: project.publishedDate
        };
    });
    projectsInfo.forEach(async (projectInfo) =>
    {
        performanceMetricesService.addNewRecordWithoutDate(projectInfo,record);
    });

});








