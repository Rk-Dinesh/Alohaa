const express = require('express');
const router = express.Router();
const AlohaaController = require('../controller/alohaa_controller');

router.post('/incoming', AlohaaController.createAlohaa);
router.post('/outgoing', AlohaaController.createAlohaa);
router.get('/lastcall', AlohaaController.getalohaabyagent);


module.exports = router;