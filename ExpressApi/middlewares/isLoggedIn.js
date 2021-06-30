module.exports = (req, res, next) => {
  if (req.query.status === 'true') {
    req.college = 'Sagarmatha';
    next();
  } else {
    res.json({
      msg: 'You are not logged in',
    });
  }
};
