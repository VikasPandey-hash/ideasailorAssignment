
const QRCode = require('qrcode');

exports.scanQrcode = (req , res) => {
     const url = req.body.url;
     if(url.length == 0) {
         res.send("Please enter a url");
     }
     QRCode.toDataURL(url , (err , url) => {
        console.log(url);
        res.send(url);
     })

    }
