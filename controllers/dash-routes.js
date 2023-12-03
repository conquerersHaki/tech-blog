const myRouter = require("express").Router();
const { Post } = require("../models");
const uniqueAuth = require("../utils/auth");

// Endpoint to get all posts for the authenticated user
myRouter.get("/all", uniqueAuth, (req, res) => {
  Post.findAll({
    where: {
      userId: req.session.userId
    }
  })
    .then(dbPostData => {
      const posts = dbPostData.map((post) => post.get({ plain: true }));
      
      res.render("all-posts-admin", {
        layout: "dashboard",
        posts
      });
    })
    .catch(err => {
      console.error(err);
      res.redirect("login");
    });
});

// Endpoint to render the form for creating a new post
myRouter.get("/new", uniqueAuth, (req, res) => {
  res.render("new-post", {
    layout: "dashboard"
  });
});

// Endpoint to render the form for editing a post
myRouter.get("/edit/:id", uniqueAuth, (req, res) => {
  Post.findByPk(req.params.id)
    .then(dbPostData => {
      if (dbPostData) {
        const post = dbPostData.get({ plain: true });
        
        res.render("edit-post", {
          layout: "dashboard",
          post
        });
      } else {
        res.status(404).end();
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = myRouter;