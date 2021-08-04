const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const teacherSchema = new Schema({
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

    const teacher = mongoose.model('teacher', teacherSchema);
    module.exports = teacher;