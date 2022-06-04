const withAuth = (req, res, next) => {
  if (!req.session.user_id) {
    res.redirect('/userlogin');
  } else {
    next();
  }
};

module.exports = withAuth;
