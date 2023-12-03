const myRouter = require("express").Router();
const { Post, Comment, User } = require("../../models/");
const uniqueAuth = require("../../utils/auth");

// Endpoint for creating a new post
myRouter.post("/add", uniqueAuth, (req, res) => {
  const postBody = req.body;
  console.log(req.session.userId);
  Post.create({ ...postBody, userId: req.session.userId })
    .then((newPost) => {
      res.json(newPost);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

// Endpoint for updating a post
myRouter.put("/edit/:id", uniqueAuth, (req, res) => {
  console.log(req.body, req.params.id);
  Post.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((affectedRows) => {
      if (affectedRows > 0) {
        res.status(200).end();
      } else {
        res.status(404).end();
      }
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

// Endpoint for deleting a post
myRouter.delete("/remove/:id", uniqueAuth, (req, res) => {
  console.log(req.body, req.params.id);
  Post.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((affectedRows) => {
      if (affectedRows > 0) {
        res.status(200).end();
      } else {
        res.status(404).end();
      }
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = myRouter;