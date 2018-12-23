const { Router } = require('express');
const xptoController = require('../../../controllers/xpto');

const router = Router();

router.get('/', xptoController.getXpto);
router.get('/:id', xptoController.getXptoById);

module.exports = {
  xptoRouter: router,
};
