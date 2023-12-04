const withAuth = (req, res, next) => {
    if (req.session.userId) {
      // user verified, use next middleware
      next();
    } else {
      // if failed, redirect to login
      res.redirect("/login");
    }
  };
  
  module.exports = withAuth;