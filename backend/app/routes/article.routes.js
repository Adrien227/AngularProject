module.exports = app => {
    const articles = require("../controllers/article.controller.js");

const connection = require("../config/db.js"); 

/******************
 * Route Articles *
 ******************/

  //route permettant d'obtenir tous les articles.
  app.get("/articles", articles.findAll);

  //route permettant de récupérer un article via son nom.
  app.get("/articles/:articleTitre", articles.findOne);

  //Route permettant l'update d'un article.
  app.put("/articles/:articleTitre", articles.update);

  //Route permmettant la création d'un article.
  app.post('/save',(req, res) => {
    let data = {titre: req.body.titre, description: req.body.description, corps:req.body.corps};
    let sql = "INSERT INTO article SET ?";
    let query = connection.query(sql, data,(err, results) => {
      if(err) throw err;
      res.redirect('/articles');
    });
  });
}