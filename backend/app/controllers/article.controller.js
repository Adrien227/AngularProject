const article = require("../models/article.model.js");

// Retrieve all Customers from the database.
exports.findAll = (req, res) => {
    article.getAll((err, data) => {
        if (err)
        {
            throw err;            
        }
        else
        {
            res.send(data);
        } 
      });
};