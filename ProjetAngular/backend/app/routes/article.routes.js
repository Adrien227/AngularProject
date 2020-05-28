module.exports = app => {
    const articles = require("../controllers/article.controller.js");

  //route permettant d'obtenir tous les articles.
  app.get("/articles", articles.findAll);

  //route permett de récupérer un article via son nom.
  app.get("/articles/:articleTitre", articles.findOne);

}