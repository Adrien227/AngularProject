module.exports = app => {
    const articles = require("../controllers/article.controller.js");

  app.get("/articles", articles.findAll);

  //route permett de récupérer un article via son id.
  app.get("/articles/:articleId", articles.findOne);
}