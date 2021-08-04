const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const marksSchema = new Schema({
    subject1: {
      type: Number,
      required: true,
    },
    subject2: {
      type: Number,
      required: true,
    },
    subject3: {
      type: Number,
      required: true,
    },
                            });

    const marks = mongoose.model('Mark', marksSchema);
    module.exports = marks;