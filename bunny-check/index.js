const apiKey = process.env["AIRTABLE_API"];
const tableBase = process.env["AIRTABLE_BASE"];
const Airtable = require("airtable");
const base = new Airtable({ apiKey: apiKey }).base(tableBase);
const moment = require("moment");

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    if (req.query.name || (req.body && req.body.name)) {
        context.res = {
            // status: 200, /* Defaults to 200 */
            body: "Hello " + (req.query.name || req.body.name)
        };
    }
    else {
        context.res = {
            status: 400,
            body: "Please pass a name on the query string or in the request body"
        };
    }
};