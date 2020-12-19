const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");

const app = express();
const port = 3001;
const dbConfig = require("./config.database");
mongoose.Promise = global.Promise;

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


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

// Routes
app.get('/', (req, res) => {
    res.json({
        "message": "YUH!"
    });
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});