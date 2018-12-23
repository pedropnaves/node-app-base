const { Router } = require('express');
const homeController = require('../../../controllers/home');

const router = Router();

router.get('/', homeController.getHome);
router.get('/:id', homeController.getHomeById);

module.exports = {
  homeRouter: router,
};
