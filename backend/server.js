/***************
*** MODULES  ***
****************
Import des modules.
****************/
const express = require("express");
const bodyParser = require("body-parser");


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Route principale, d'accueil
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Angular Project." });
});

// soit localhost:8080
app.listen(8080, () => console.log('Listening on port 8080'))