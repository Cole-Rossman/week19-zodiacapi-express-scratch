const { Router } = require('express');
const { signs } = require('../../data/signs');

module.exports = Router()
    .get('/:id', (req, res) => {
        const id = req.params.id;
        const matchingSign = signs.find((sign) => sign.id === id);
        res.json(matchingSign);
    })
    // the '/' is added to the route established in app.js, so this would create '/zodiac/' and above would create '/zodiac/:id'
    .get('/', (req, res) => {
        const signInfo = signs.map(({ id, name }) => {
            return { id, name };
        });
        res.json(signInfo);
    });