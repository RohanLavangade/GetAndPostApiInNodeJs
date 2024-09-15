const express = require("express");
const router = express.Router();
const { saveStudentData, getStudentData, getStudentById } = require("../controller/student"); // Ensure this path is correct

// Define the route and attach the handler function
router.post("/", saveStudentData);
router.get("/", getStudentData);
router.get("/:id", getStudentById);

module.exports = router;
