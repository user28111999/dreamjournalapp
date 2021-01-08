const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");

const app = express();
const port = 3001;
const dbConfig = require("./config.database");
mongoose.Promise = global.Promise;

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});  

mongoose.connect(dbConfig.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("[DATABASE] CONNECTION SUCCESS");
}).catch((err) => {
    console.log("[DATABASE] CONNECTION FAILED");
    console.log(err);
    process.exit();
});

require("./route.dreams")(app);
require("./route.notes")(app);

// Routes
app.get('/', (req, res) => {
    res.json({
        "message": `CYBERDREAMS REST API: ${req, res}`
    });
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});