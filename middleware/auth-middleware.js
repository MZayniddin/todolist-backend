const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const userInfo = jwt.verify(req.headers.bearer, process.env.SECRET_KEY);
    req.user = userInfo;
    next();
  } catch (err) {
    res.status(401).send({ message: err });
  }
};
