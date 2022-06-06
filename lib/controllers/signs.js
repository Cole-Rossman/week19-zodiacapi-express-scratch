const { Router } = require('express');
const { signs } = require('../../data/signs');

module.exports = Router()
    .get('/zodiac/:id', (req, res) => {
        const id = req.params.id;
        const matchingSign = signs.find((sign) => sign.id === id);
        res.json(matchingSign);
    })

    .get('/zodiac', (req, res) => {
        const signInfo = signs.map(({ id, name }) => {
            return { id, name };
        });
        res.json(signInfo);
    });