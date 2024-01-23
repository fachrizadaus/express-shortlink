const express = require('express');
const linkController = require('../controllers/linkController');
const router = express.Router();



router.get('/', (req, res, next) => linkController.index(req, res, next));

module.exports = router;
