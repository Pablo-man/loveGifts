const path = require("path");
const exhbs = require("express-handlebars");
const morgan = require("morgan");
const multer = require("multer");

module.exports = (app) => {
  //SETTINGS
  app.set("port", process.env.PORT || 3000);
  app.set("views", path.join(__dirname, "views"));
  app.engine(
    ".hbs",
    exhbs({
      defaultLayout: "main",
      partialsDir: path.join(app.get("views"), "partials"),
      layoutsDir: path.join(app.get("views"), "layouts"),
      extname: '.hbs',
      helpers: require('./helpers')
    })
  );
  //MIDDLEWARES

  //ROUTES

  //ERRORHANDLERS
  return app;
};
