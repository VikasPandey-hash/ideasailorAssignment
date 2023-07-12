const express = require('express');
const app = express();
const cors = require('cors');
const qrRouter = require("./route")
app.use(cors());

app.use(express.json());  // 
 // to avoid cors errors

app.use("/api" ,qrRouter )
app.get('/hello', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.send('Hello World');
})


const port = 5000;

app.listen(port, () => {
console.log( 'Server started on port ' + port)
})