const express = require('express');
const app = express();
const router = express.Router();
const db = require('../db')


var Course = (course) => {
    this.id = course.id
    this.name = course.name
};

Course.getAllCources = (result) => {
    db.query("SELECT * FROM material", (err, res) => {
        if (err) {
            result(err, null)

        } else {
            result(null, res)

        }
    });
}

Course.getCourcesById = (materialId, result) => {
    db.query("SELECT * FROM material WHERE id=?", materialId, (err, res) => {
        if (err) {
            result(err, null)

        } else {
            result(null, res)

        }
    });
}

// Course.name = "C#";
Course.insertMaterial = (material , result) => {
    db.query("INSERT INTO material  (name) VALUES (?)" , [material.name] ,(err, res) => {
;
}
module.exports = Course;


if (err) {
    result(err, null)

} else {
    result(null, res)

}
})
