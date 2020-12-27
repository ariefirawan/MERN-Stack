const express = require('express');
const { check } = require('express-validator');

const router = express.Router();
const placesControllers = require('../controllers/places-controllers');

router.get('/:pid', placesControllers.getPlace);

router.get('/user/uid', placesControllers.getPlace);

router.post('/', placesControllers.getPlace);

router.patch('/:pid', placesControllers.getPlace);

router.delete('/:pid', placesControllers.getPlace);

module.exports = router;
