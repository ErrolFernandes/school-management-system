const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    Name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    class: {
      type: String,
      required: true,
    },
    address: {
        type: String,
        required: true,
      },
    phone: {
        type: Number,
        required: true,
      },
                            });

    const student = mongoose.model('Student', studentSchema);
    module.exports = student;