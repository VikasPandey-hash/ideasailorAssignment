
const QRCode = require('../models/QRCode');
const qrcode = require('qrcode');

const generateQRCode = async (req, res) => {
  try {
    const { content } = req.body;
    const identifier = generateUniqueIdentifier();

    const qrCodeImage = await qrcode.toDataURL(content);
    const qrCode = new QRCode({ content, identifier });
    await qrCode.save();

    res.json({ identifier, qrCodeImage });
  } catch (error) {
    res.status(500).json({ error: 'Failed to generate QR code' });
  }
};

const retrieveEContent = async (req, res) => {
  try {
    const { identifier } = req.params;
    const qrCode = await QRCode.findOne({ identifier });

    if (!qrCode) {
      return res.status(404).json({ error: 'QR code not found' });
    }

    res.json({ eContent: qrCode.content });
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve e-content' });
  }
};

function generateUniqueIdentifier() {
  
  return Math.random().toString(36).substr(2, 9);
}

module.exports = {
  generateQRCode,
  retrieveEContent,
};
