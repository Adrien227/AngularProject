const sql = require("../config/db.js");

const article = function(article) {
    this.nom = article.nom;
    this.description = article.description;
  };

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

module.exports = article;