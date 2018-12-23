const { Router } = require('express');
const { homeRouter } = require('./home');
const { xptoRouter } = require('./xpto');

const router = Router();

router.use('/home', homeRouter);
router.use('/xpto', xptoRouter);

module.exports = {
  v1Router: router,
};
