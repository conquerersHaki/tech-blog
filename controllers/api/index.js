const myRouter = require("express").Router();

const userRoutes = require("./user-routes.js");
const postRoutes = require("./post-routes");
const commentRoutes = require("./comment-routes");

myRouter.use("/user", userRoutes);
myRouter.use("/post", postRoutes);
myRouter.use("/comment", commentRoutes);

module.exports = myRouter;
