
const jwt = require("jsonwebtoken");
const moment = require("moment");
const config = require("./config.js");
const express = require('express');
const bodyParser = require("body-parser");

const app = express();
const routerAuth = express.Router();
const PORT = 8080;

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.listen(PORT);
app.use("/api", routerAuth);

console.log(`Running service on http://localhost:${PORT}`);

routerAuth.post('/authenticate', (req, res) => {
    console.log("Validating User and Password");
    console.log(req.body);
    let token = genToken(req.body.idUser);
    res.json({
        success: true,
        token: token
    });
});

function genToken(idUser) {

    let payload = {
        sub: idUser,
        iat: moment().unix(),
        exp: moment().add(5, "minutes").unix(),
        role: "admin"
    }

    let token = jwt.sign(payload, config.TOKEN_SECRET);
    return token;
}