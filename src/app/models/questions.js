const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionSchema = new Schema({
    body: String,
    rating: Number,
    author: {
        type: Schema.Types.ObjectId,
        ref: 'Question'
    }
});

module.exports = mongoose.model("Question", questionSchema);