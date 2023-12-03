const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");

const sequelize = require("./config/connection.js");
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

// session configuration
const sessionConfig = {
  secret: "SuperDuperSecretKey",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sessionConfig));

const handlebarsInstance = exphbs.create({
  helpers: {

    //for the date
    format_date: date => {
      const month = date.getMonth() + 1;
      const day = date.getDate();
      const year = date.getFullYear();
      return `${month}/${day}/${year}`;
    }
  }
});

app.engine("handlebars", handlebarsInstance.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// import path for controllers
app.use(require('./custom-controllers/'));

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}!`);
  sequelize.sync({ force: false });
});