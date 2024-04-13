module.exports.storeReturnTo = (req, res, next) => {
  if (req.session.returnTo) {
      res.locals.returnTo = req.session.returnTo;
  }
  next();
}

module.exports.isLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    // Let's store where the user was prior to being redirected:
    // console.log(req.path, req.originalUrl);
    req.session.returnTo = req.originalUrl;
    req.flash('error', 'You must be signed in to do this.');
    return res.redirect('/login');
  }
  next();
}