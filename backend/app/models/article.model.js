const sql = require("../config/db.js");

const article = function(article) {
    this.nom = article.nom;
    this.description = article.description;
  };


/***************************************
 * Permet d'obtenir tous les articles. *
 ***************************************/

article.getAll = result => {
    sql.query("SELECT * FROM article", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      else
      {
        console.log("test: ", res);
        result(null, res);
      }
    });
  };

/**************************************
 * Recherche d'un article spécifique. *
 **************************************/

article.findById = (articleName, result) => 
{
  sql.query(`SELECT * FROM article WHERE nom = '${articleName}'`, (err, res) => 
  {
    if (err) 
    {
      console.log("error: ", err);
      result(err, null);
      return;
    }
  
    if (res.length) 
    {
      console.log("found article: ", res[0]);
      result(null, res[0]);
      return;
    }
    result({ kind: "not_found" }, null);
  });
};

module.exports = article;