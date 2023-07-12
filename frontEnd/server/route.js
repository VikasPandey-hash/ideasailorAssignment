const express = require('express');
const { scanQrcode } = require('./qrcodeController');

const qrRouter = express.Router();


qrRouter.post("/generate"  ,scanQrcode )






module.exports = qrRouter ;