const article = require("../models/article.model.js");

// Permet de récupérer tous les articles
exports.findAll = (req, res) => {
    article.listAll((err, data) => {
      if(res)
      {
        res.send(data);
      }  
      else
      {
            throw err;            
      }
      });
};

/**************************************
 * Recherche d'un article spécifique. *
 **************************************/
exports.findArticle = (req, res) => {
    article.listByTitle(req.params.articleTitre, (err, data) => {
      if(data)
      {
        res.send(data);
      }
      else
      {
        throw err;
      } 
    });
  };

/**********
 * INSERT *
 **********/

exports.update = (req, res) => {
    if (!req.body) {
      res.status(400).send("Merci de bien remplir les champs.");
    }
  
    article.updateByTitre(
      req.params.articleTitre,
      new article(req.body),
      (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send(`Le titre : ${req.params.articleTitre} est inexistant. `);
          } else {
            res.status(500).send(`Impossible de mettre à jour : ${req.params.articleTitre}`);
          }
        } else res.send(data);
      }
    );
  };


/***************
 * SUPPRESSION *
 ***************/

exports.supp = (req, res) => {
  article.delete(req.params.articleTitre, (err, data) => {
    if(data)
    {
      res.send(data);
    }
    else
    {
      throw err;
    } 
  });
};