const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionTypeSchema = new Schema({
    body: String,
    size: Number,
});

module.exports = mongoose.model("Question Type", questionTypeSchema);