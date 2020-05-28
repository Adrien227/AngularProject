const sql = require("../config/db.js");

const article = function(article) {
    this.titre = article.titre;
    this.description = article.description;
    this.corps = article.corps;
  };


/***************************************
 * Permet d'obtenir tous les articles. *
 ***************************************/

article.listAll = result => {
    sql.query("SELECT * FROM article", (err, res) => {
      if(res)
      {
        result(null, res);
        return;
      }
      else{
        result(err, null);
      }
    });
  };

/**************************************
 * Recherche d'un article spécifique. *
 **************************************/

article.listByTitle = (articleTitre, result) => 
{
  sql.query(`SELECT * FROM article WHERE nom = '${articleTitre}'`, (err, res) => 
  {
    if (res) 
    {
      result(null, res);
      return;
    }
    else
    {
      result(err, null);
    }
  });
};

module.exports = article;