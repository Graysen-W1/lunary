// middleware/auth.mjs
// this verifies JWT token on protected routes
// source: https://expressjs.com/en/guide/using-middleware.html
// source: https://www.npmjs.com/package/jsonwebtoken#jwtverifytoken-secretorpublickey-options-callback
import jwt from 'jsonwebtoken';

function authCheck(req, res, next) {
  // source: https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Authorization
  const authHeader = req.headers['authorization'];

  if (!authHeader) {
    return res.status(401).json({ error: 'No token provided' });
  }

  // source: https://www.w3schools.com/jsref/jsref_split.asp
  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Invalid token' });
  }
}

export default authCheck;
