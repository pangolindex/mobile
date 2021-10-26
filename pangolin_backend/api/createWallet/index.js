'use strict';

const express = require('express');
const collections = require('./wallet.controller');
const auth = require('../../auth/auth.service');

const router = express.Router();

router.post('/createWallet', collections.createWallet);
router.post('/resetWallet', collections.recoveryWallet);



module.exports = router;