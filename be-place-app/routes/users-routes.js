const express = require('express');
const { check } = require('express-validator');

const router = express.Router();
const usersControllers = require('../controllers/users-controllers');

router.get('/:uid', usersControllers.getUsers);

router.post('/login', usersControllers.getUsers);

router.post('signup', usersControllers.getUsers);

module.exports = router;
