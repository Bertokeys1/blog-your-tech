const router = require('express').router();
const apiRoutes = requre('/controller/api');

router.use('/api', apiRoutes);

module.exports = router;