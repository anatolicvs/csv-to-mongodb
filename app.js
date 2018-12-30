const mongoose = require("mongoose");
const csv = require('csvtojson');
const schema = require("./schema/schema");
const graphqlHTTP = require('express-graphql');
const Diabete = require('./models/diabet');
const express = require('express');

const app = express();
const PORT = 8080;
const HOST = '0.0.0.0';


mongoose.connect("mongodb://eisti:foe9cohRaice@ds145474.mlab.com:45474/data-bi-eisti", { useNewUrlParser: true });

mongoose.connection.once('open', () => {
    console.log("connected to database")
    mongoose.connection.db.dropDatabase();
    console.log("previous documents are dropped");
});

/**
 * import data from local file
 */
const processDiabetes = async () => {
    const diabetes = await csv({ trim: true }).fromFile('diabetes.csv');
    diabetes.forEach((row) => {
        let diabet = new Diabete({
            pregnancies: row.Pregnancies,
            glucose: row.Glucose,
            bloodPressure: row.BloodPressure,
            skinThickness: row.BloodPressure,
            insulin: row.Insulin,
            bmi: row.Insulin,
            diabetesPedigreeFunction: row.DiabetesPedigreeFunction,
            age: row.Age,
            outcome: row.Outcome
        });
        diabet.save();
    });
}

processDiabetes();

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);