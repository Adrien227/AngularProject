const article = require("../models/article.model.js");

// Permet de récupérer tous les articles
exports.findAll = (req, res) => {
    article.getAll((err, data) => {
        if (err)
        {
            throw err;            
        }
        else
        {
            res.send(data);
        } 
      });
};

/**************************************
 * Recherche d'un article spécifique. *
 **************************************/
exports.findOne = (req, res) => {
    article.findById(req.params.articleName, (err, data) => {
      if (err) 
      {
        //cette condition permet de ne pas arrêter le serveur au cas où
        //il ne trouve pas le nom. Sinon le serveur crash inutilement...
        if (err.kind === "not_found") {
           //source : https://stackoverflow.com/questions/8393275/how-to-programmatically-send-a-404-response-with-express-node
          res.status(404).send(`The article : ${req.params.articleName} doesn't exist in the database.`);
        } 
        else 
        {
            throw err;
        }
      } 
      else 
      {
          res.send(data);
      }
    });
  };

/***************************************
 *              UPDATE                 *
 ***************************************/

exports.update = (req, res) => {
  if (!req.body) 
  {
    res.status(400).send("Content can not be empty!");
  }
  article.modif(
    req.params.articleName,
    new article(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send(`N'existe pas : ${req.params.articleName}.`);
        } 
        else 
        {
          res.status(500).send(`Erreur durant la modification : ${req.params.articleName}`);
        }
      } else res.send(data);
    }
  );
};