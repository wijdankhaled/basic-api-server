
const { clothes } = require('../models');


async function createclothes(req, res) {
    let clothesInfo = req.body;
    let clothes = await clothes.create(clothesInfo);
    res.status(201).json(clothes);
}

async function getclothes(req, res) {
    const id = parseInt(req.params.id);
    let clothes = await food.findOne({ where: { id: id } });
    res.status(200).json(clothes);
}

async function getAllclothes(req, res) {
    let all = await clothes.findAll();
    res.status(200).json(all);
}

async function updateclothes(req, res) {
    const id = parseInt(req.params.id);
    let clothesInfo = req.body;

    let clothes = await clothes.findOne({ where: { id } });
    let updateclothes= await clothes.update(clothesInfo);
    res.status(200).json(updateclothes);
}


async function deleteclothes(req, res) {
    const id = parseInt(req.params.id);
    let deleteclothes = await clothes.destroy({ where: { id } });
    res.status(204).json(deleteclothes);
}

module.exports = {
    createclothes,
    getclothes,
    getAllclothes,
    updateclothes,
    deleteclothes,
}