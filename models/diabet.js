const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const diabetSchema = new Schema({
    pregnancies: Number,
    glucose: Number,
    bloodPressure: Number,
    skinThickness: Number,
    insulin: Number,
    bmi: Number,
    diabetesPedigreeFunction: Number,
    age: Number,
    outcome: Number
});

module.exports = mongoose.model('Diabet', diabetSchema); 