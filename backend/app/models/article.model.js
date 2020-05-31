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
  sql.query(`SELECT * FROM article WHERE titre = '${articleTitre}'`, (err, res) => 
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

/**
 * UPDATE
 */


article.updateByTitre = (articleTitre, article, result) => {
  sql.query(`UPDATE article SET titre = '${article.titre}' , description = '${article.description}', corps = '${article.corps}' WHERE titre = '${articleTitre}'`
  ,(err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        result({ kind: "not_found" }, null);
        return;
      }
      result(null, { articleTitre: articleTitre, ...article });
    }
  );
};
 
/**********
 * INSERT *
 **********/

 //INSERT se trouve directement dans article.route.js
// Il m'était beaucoup plus simple de le faire là-bas même si j'aurai préféré une meilleure "structure."


/***************
 * SUPPRESSION *
 ***************/

article.delete = (articleTitre, result) => {
  sql.query(`DELETE FROM article WHERE titre = '${articleTitre}'`, (err, res) => {
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