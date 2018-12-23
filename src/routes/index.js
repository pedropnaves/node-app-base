const { Router } = require('express');

const { v1Router } = require('./v1');
const { errorRouter } = require('./error');

const router = Router();

router.use('/v1', v1Router);

router.use(errorRouter);

module.exports = router;
