// create new Service class after import Error
const Error = require("../models/Error");
class ErrorService
{
    constructor()
    {
        this.errorSchema = Error;
    }
    async getErrorByTitle(title)
    {
        try
        {
            const errorByTitle = await this.errorSchema.findOne({ title });
            if (errorByTitle === null)
            {
                return {
                    status: 404,
                    error: {
                        message: "Error Not Found"
                    }
                }
            }
            return {
                status: 200,
                data: {
                    retrived: errorByTitle
                }
            }

        }
        catch (err)
        {
            console.log("Error : ",err);
            return {
                status: 500,
                error: {
                    message: `Database Error : ${err.message}`
                }
            }
        }
    }
    async createError(title,description)
    {
        try
        {
            const newError = new this.errorSchema({
                title,
                description
            });
            const result = await newError.save();
            return {
                status: 200,
                data: {
                    saved: result,
                    message: "Error Created Successfully"
                }
            }

        } catch (error)
        {
            console.log("Error : ",err);
            return {
                status: 500,
                error: {
                    message: `Database Error : ${err.message}`
                }
            }
        }
    }
}
const errorService = new ErrorService();
module.exports = errorService;