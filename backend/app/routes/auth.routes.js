module.exports = app => {
  const user = require("../user/auth.js");

app.post('/signin', user.signin);
}