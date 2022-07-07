const express = require('express');
const router = express.Router();
const newController = require('../controllers/NewController');

router.get('/', newController.all);
router.get('/archived', newController.archived);
router.get('/:newId', newController.get);
router.get('/archive/:newId', newController.update);
router.delete('/:newId', newController.delete);
router.post('/', newController.add);

module.exports = router;
