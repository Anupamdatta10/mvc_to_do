const express = require('express')
const router = express.Router()
const to_do_Controller = require('../controllers/to_do.controller');

// Retrieve all employees
router.get('/', to_do_Controller.findAll);
router.get('/:id', to_do_Controller.findById);
router.get('/user/:id', to_do_Controller.findByUserId);
router.post('/', to_do_Controller.create);
router.put('/:id', to_do_Controller.update);
router.delete('/:id', to_do_Controller.delete);

module.exports = router;