const mongoose = require("mongoose");
const Student = require("../model/student");
const student = require("../model/student");

// Controller function to save student data
const saveStudentData = async (req, res) => {
    try {
        const student = new Student({
            _id: new mongoose.Types.ObjectId(),
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            gender: req.body.gender
        });

        const result = await student.save();
        res.status(200).json({
            newStudent: result
        });
    } catch (err) {
        res.status(400).json({
            error: err.message
        });
    }
};

const getStudentData = async (req, res) => {
    try {
        // Fetch all student records
        const students = await Student.find();

        // Send response with fetched data
        res.status(200).json({
            students: students
        });
    } catch (err) {
        // Handle error
        res.status(500).json({
            error: err.message
        });
    }
};

const getStudentById = async (req, res) => {
    try {
        // Extract student ID from request parameters
        const studentId = req.params.id;

        // Find student by ID
        const student = await Student.findById(studentId);

        if (student) {
            res.status(200).json({
                student: student
            });
        } else {
            
            res.status(404).json({
                message: "Student not found"
            });
        }
    } catch (err) {
        // Handle errors
        res.status(500).json({
            error: err.message
        });
    }
};

module.exports = { saveStudentData ,getStudentData ,getStudentById};
