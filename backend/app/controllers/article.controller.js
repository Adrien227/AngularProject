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
exports.findOne = (req, res) => {
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