const myRouter = require("express").Router();
const { User } = require("../../models");

// Endpoint for creating a new user
myRouter.post("/register", (req, res) => {
  User.create({
    username: req.body.username,
    password: req.body.password
  })
  .then(newUser => {
    req.session.save(() => {
      req.session.userId = newUser.id;
      req.session.username = newUser.username;
      req.session.loggedIn = true;

      res.json(newUser);
    });
  })
  .catch(err => {
    console.error(err);
    res.status(500).json(err);
  });
});

// Endpoint for user login
myRouter.post("/authenticate", (req, res) => {
  User.findOne({
    where: {
      username: req.body.username
    }
  }).then(user => {
    if (!user) {
      res.status(400).json({ message: 'No user account found!' });
      return;
    }

    const validPassword = user.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: 'Incorrect password!' });
      return;
    }

    req.session.save(() => {
      req.session.userId = user.id;
      req.session.username = user.username;
      req.session.loggedIn = true;
  
      res.json({ user, message: 'You are now logged in!' });
    });
  });
});

// Endpoint for user logout
myRouter.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  }
  else {
    res.status(404).end();
  }
});

// Endpoint for deleting a user
myRouter.delete("/remove/:id", (req, res) => {
  User.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(deletedUser => {
    if (!deletedUser) {
      res.status(404).json({ message: 'No user found with this id' });
      return;
    }
    res.json(deletedUser);
  })
  .catch(err => {
    console.error(err);
    res.status(500).json(err);
  });
});

module.exports = myRouter;