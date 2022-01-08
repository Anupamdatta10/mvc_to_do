const express = require('express')
const router = express.Router()
const to_do_Controller = require('../controllers/to_do.controller');

// Retrieve all employees
router.get('/', to_do_Controller.findAll);
router.get('/:id', to_do_Controller.findById);
router.post('/', to_do_Controller.create);

module.exports = router;