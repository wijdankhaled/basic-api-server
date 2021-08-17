'use strict';

const express = require('express');
const router = express.Router();

const {
    createfood,
    getfood,
    getAllfood,
    updatefood,
    deletefood,
} = require('./foodimplemintation');

router.get('/food', getAllfood);
router.post('/food', createfood);
router.get('/food/:id', getfood);
router.put('/food/:id', updatefood);
router.delete('/food/:id', deletefood);

module.exports = router;