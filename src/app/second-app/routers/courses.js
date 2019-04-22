const express = require('express');
const app = express();
const router = express.Router();
const db = require('../db')

const Course = require('../models/materials')

router.get('/', (req, res) => {
    // res.send({name: ' Hi Ghanooge'});

    Course.getAllCources((err, material) => {
        if (err) {
            res.status(500).json({error: err});
        } else {
            res.status(200).json({material});

        }
    })
});


router.get('/:id', (req, res) => {
    res.send('Hi  sallit');
});
router.post('/', (req, res) => {
    var materialDetails = {name: req.body.name}
    Course.insertMaterial(materialDetails, (err, material) => {
        if (err) {
            res.status(500).json({error: err});
        } else {
            res.status(200).json({code: '1'});

        }
    })
});

module.exports = router;
