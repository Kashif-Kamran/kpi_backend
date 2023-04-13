const performanceMetricService = require("./PerformanceMetric.service");
const ProjectService = require("./Project.service");
const path = require("path")
const csv = require("csv-parser");
const fs = require("fs");
projectService = new ProjectService();
const scheduler = require("node-schedule");

var fileRead = false;
var mockApiData = [];

function readDataFromFile()
{
    const csvFilePath = path.join(__dirname,'../','Data','Data.csv');
    console.log("File : Path : ",csvFilePath)
    // read the file at csvFilePath and log the data
    let data = [];
    fs.createReadStream(csvFilePath)

        .pipe(csv())
        .on('data',(row) =>
        {

            mockApiData.push(row);
            console.log("Row : ",row)
        })
        .on('end',() =>
        {
            console.log("+++- File Read Completed -+++");
        });
    fileRead = true;

}

const mockApi = scheduler.scheduleJob("*/10 * * * * *",async () =>
{
    if (fileRead == false || (mockApiData && mockApiData.length == 0))
    {
        console.log("Going to Read the File Data ");
        readDataFromFile();
        return;
    }
    console.log("File Has been Read : ",mockApiData.length);

    let projectIds = (await projectService.getAllProjects()).data.map((x) =>
    {
        return x._id;
    });
    if (projectIds.length != 0)
        projectIds.forEach((itr) =>
        {
            performanceMetricService.addPerformanceMetricesData(itr,mockApiData.pop());
        })
    else
        console.log("No Project Ids Found")
});

module.exports = mockApi;

