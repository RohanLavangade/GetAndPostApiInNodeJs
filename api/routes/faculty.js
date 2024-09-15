const express = require("express");
const router = express.Router();
const Faculty = require("../model/faculty");

// GET request handler
router.get("/", (req, res, next) => {
    Faculty.find()
    .then(result=>{
        res.status(200).json({
            FacultyData:result
        });
    })
    .catch(err=>{
        console.log(err);
        res.status(505).json({
            error:err
        });
    })
    
});

// POST request handler
router.post("/", (req, res, next) => {
    const faculty = new Faculty({
        name: req.body.name,
        email: req.body.email,
        gender: req.body.gender
    });

    faculty.save()
        .then(result => {
            res.status(200).json({
                FacultyData: result
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});

module.exports = router;
