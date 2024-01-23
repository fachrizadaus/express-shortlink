const express = require('express');
let connection = require('../library/database');

class linkController {
    constructor() { }

    index(req, res) {
        connection.query('SELECT * FROM links ORDER BY id desc', (err, rows) => {
            if (err) {
                console.log(err);
                connection.end();
                res.status(500).json({ error: 'Internal Server Error' });
            }

            return res.json({
                message: "Get data link successfully!",
                data: rows
            });
        });
    }

    store(req, res) {
        console.log(req);
    }
}

module.exports = new linkController();