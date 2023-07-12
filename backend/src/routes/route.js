// src/routes/index.js
const express = require('express');
const router = express.Router();
const QRCodeController = require('../controllers/QRCodeController');

router.post('/qrcode/generate', QRCodeController.generateQRCode);
router.get('/qrcode/:identifier', QRCodeController.retrieveEContent);


router.post("/teste", (req, res) => {
    res.send("teste");
})

module.exports = router;
