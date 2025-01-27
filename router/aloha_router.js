const express = require('express');
const router = express.Router();
const AlohaaController = require('../controller/alohaa_controller');

router.post('/post', AlohaaController.createAlohaa);

module.exports = router;