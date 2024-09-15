const mongoose = require("mongoose");
const validator = require("validator");
const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],  // Custom error message
        maxlength: [50, 'Name cannot exceed 50 characters']  // Maximum length validator
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        match: [/.+\@.+\..+/, 'Please enter a valid email address']  // Regex validator for email
    },
    phone: {
        type: Number,
        required: [true, 'Phone number is required'],
        validate: {
            validator: function (v) {
                return /^\d{10}$/.test(v);  // Validating phone number to be 10 digits
            },
            message: props => `${props.value} is not a valid 10-digit phone number!`
        }
    },
    gender: {
        type: String,
        required: true,
        enum: {
            values: ['Male', 'Female', 'Other'],  // Restrict values to predefined options
            message: '{VALUE} is not supported'   // Custom error message for invalid gender
        }
    }
});

module.exports = mongoose.model('Student', studentSchema);
