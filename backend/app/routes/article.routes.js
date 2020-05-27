module.exports = app => {
    const articles = require("../controllers/article.controller.js");

  app.get("/articles", articles.findAll);

  //route permett de récupérer un article via son nom.
  app.get("/articles/:articleName", articles.findOne);

  //route permettant à l'update.
  app.put("/articles/:articleName", articles.update);
}