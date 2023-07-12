
const mongoose = require('mongoose');

const QRCodeSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  identifier: {
    type: String,
    required: true,
    unique: true,
  },
});

module.exports = mongoose.model('QRCode', QRCodeSchema);
