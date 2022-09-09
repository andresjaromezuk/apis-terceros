const express = require('express');
const router = express.Router();

const actorsController = require('../../controllers/api/actorsController');

router.get('/', actorsController.list);
router.get('/detail/:id', actorsController.detail);


module.exports = router;