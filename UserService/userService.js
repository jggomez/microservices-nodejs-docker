
const express = require('express');
const jwt = require("jsonwebtoken");
const config = require("./config.js");
const bodyParser = require("body-parser");

const app = express();
const routerUser = express.Router();
const PORT = 8080;

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.listen(PORT);
app.use("/api/user", routerUser);

console.log(`Running user service on http://localhost:${PORT}`);

routerUser.get('/', (req, res) => {

  let token = req.headers['x-access-token'];

  if (token) {

    jwt.verify(token, config.TOKEN_SECRET, (err, decoded) => {

      if (err) {
        return res.json(
          {
            success: false,
            message: "Failed to authenticate token."
          }
        );
      }

      req.decoded = decoded;

      return res.json(
        {
          success: true,
          user: {
            id: 123456,
            name: "Juan Guillermo",
            lastName: "Gómez",
            title: "GDE Firebase, CEO DevHack",
            GDG: "GDG Cali"
          }
        }
      );


    });

  }
  else {
    return res.status(403).send({
      success: false,
      message: "No token provided."
    });
  }


});