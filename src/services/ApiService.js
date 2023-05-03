const path = require("path");
const csv = require("csv-parser");
const fs = require("fs");
const schedule = require("node-schedule");
// require the service of project service
const projectService = require("./Project.service");
// require the performance metrices service
const performanceMetricesService = require("./PerformanceMetric.service");
const { error } = require("console");
const stabilityKpiService = require("./StabilityKpi.service");

var mockApiData = [];
var iterator = 0;

const errorsList = [
    "Caused by:",
    "[libaudioclient.so] android::AudioTrack::setVolume",
    "java.lang.IllegalArgumentException:",
    "Native method:",
    "chromium-TrichromeWebViewGoogle.apk-stable",
    "com.google.android.gms.policy",
    "futex_wait_ex",
];



async function readDataFromFile()
{

    // read the file at csvFilePath and log the data
    await new Promise((resolve) =>
    {
        const csvFilePath = path.join(__dirname,'../','Data','Updated_Data.csv');
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
    let output = undefined;
    if (searchIndex !== -1) 
    {
        const startIndex = searchIndex + searchStr.length;
        const endIndex = startIndex + sliceLength;
        output = searchStr + inputString.slice(startIndex,endIndex);
    }
    return output;

}
function findAndTokenize(str,searchStr,tokenLen)
{
    const len = searchStr.length;
    const threshold = Math.floor(len * 0.5);
    for (let i = 0; i <= str.length - len; i++)
    {
        let count = 0;
        for (let j = 0; j < len; j++)
        {
            if (searchStr[j] === str[i + j])
            {
                count++;
            }
        }
        if (count >= threshold)
        {
            return [i,str.substr(i,tokenLen)];
        }
    }
    return [-1,null];
}

function getMeaningFullError(error)
{
    let errorFound = false;
    let output = error;
    for (let i = 0; i < errorsList.length; i++)
    {
        const [index,token] = findAndTokenize(output,errorsList[i],1000);
        if (index !== -1)
        {
            console.log("----------------( Found )----------------")
            output = token;
            errorFound = true;
            break;
        }
    }
    if (error !== undefined && !errorFound)
    {
        return output.substr(0,2000);
    }
    return output;
}
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
    // Getting Vital and converting it into meaning full information
    const VitalError = record["Vital"];
    const Vital = getMeaningFullError(VitalError);

    const possible_fix = record["Possible Fix"];
    return { Installs,DAU,DAU_Install,PT,D1,ANR,Crashes,IMP_DAU,Vital,possible_fix };
}
readDataFromFile();
// create a job that runs at every 5 seconds
const job = schedule.scheduleJob("*/10 * * * * *",async () =>
{
    try
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
            // distructure record seperate out Vital and rest of the values
            const { Vital,possible_fix,...tempRecord } = record;
            // add new record to performanceMetricesService
            const response = await performanceMetricesService.addNewRecordWithoutDate(projectInfo,tempRecord);
            // add new date to projectInfo
            projectInfo.newDate = response.data.date;
            // send record to stabilityKpiService
            stabilityKpiService.addNewRecord(projectInfo,record);
            // -- stability service firstly adds the error in error collection if exsists
            // -- then its add sollution to sollution collection if exsisits
            // -- then it adds the record in the stability Record Collection
        });
    }
    catch (err)
    {
        console.log("Mock Api Loading Error",error.message);
    }

});








