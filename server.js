const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const mockApi = require("./src/services/ApiService");

// Import Router
const teamLeadRouter = require("./src/routers/TeamLead.route");
const projectRouter = require("./src/routers/Project.route");
const recomendationRouter = require("./src/routers/Recomendation.route");
const errorRouter = require("./src/routers/Error.route");

const port = 4000 || process.env.PORT; // Application Port


// Database Connection 
mongoose.connect("mongodb://localhost:27017/FypDatabase",{ useNewUrlParser: true,useUnifiedTopology: true })
    .then((connect) => console.log(`Database Connected Successfully (FypDatabase)`))
    .catch((error) => console.log(`Error occured while database connection ${error} `))


// Application Configuration
const app = express();
app.use(express.json());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan('tiny')); // logger to log the incoming requests on the server

// Create Routes
app.use("/teamlead",teamLeadRouter);
app.use("/project",projectRouter);
app.use("/recomendation",recomendationRouter);
app.use("/error",errorRouter);

app.listen(port,() =>
{
    console.log(`Server is running on port ${port}`);
});
