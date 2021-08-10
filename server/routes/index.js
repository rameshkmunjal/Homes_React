const express = require('express');
const router = express.Router();
const controllers = require('../controllers/homeControllers');

router.get('/', controllers.getHomes);
router.get('/home/:id', controllers.getHomeById);
router.post('/create', controllers.createHome);
router.delete('/delete/:id', controllers.deleteHome);
router.put('/edit/:id', controllers.updateHome);
router.put('/home/:id', controllers.getHomeById);

module.exports = router;