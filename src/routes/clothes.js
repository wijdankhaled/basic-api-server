'use strict';

const express = require('express');
const router = express.Router();

const {
    createclothes,
    getclothes,
    getAllclothes,
    updateclothes,
    deleteclothes,
} = require('./clothesimplemntation');

router.get('/clothes', getAllclothes);
router.post('/clothes', createclothes);
router.get('/clothes/:id', getclothes);
router.put('/clothes/:id', updateclothes);
router.delete('/clothess/:id', deleteclothes);

module.exports = router;