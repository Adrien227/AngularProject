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
  
    if (res) 
    {
      console.log("found article: ", res);
      result(null, res);
      return;
    }
    result({ kind: "not_found" }, null);
  });
};


/***************************************
 *              UPDATE                 *
 ***************************************/

article.modif = (name, article, result) => {
  sql.query(
    `UPDATE article SET nom = ?, description = ? WHERE nom = '${name}'`,
    [article.name, article.description],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated article: ", { name: name, ...article });
      result(null, { name: name, ...article });
    }
  );
};


module.exports = article;