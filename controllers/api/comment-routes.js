const myRouter = require("express").Router();
const { Comment } = require("../../models/");
const customAuth = require("../../utils/auth");

myRouter.post("/custom-endpoint", customAuth, (req, res) => {
  Comment.create({ ...req.body, userId: req.session.userId })
    .then((newComment) => {
      res.json(newComment);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = myRouter;
